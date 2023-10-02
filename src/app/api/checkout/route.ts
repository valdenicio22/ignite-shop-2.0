import { IProduct } from "@/context/useCart";
import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type BodyProps = {
  products: IProduct[]
}

export async function POST(req: Response)  {
  try {
     const body: BodyProps = await req.json()
    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}`
  const {products} = body

    if(!products.every((product) => product.defaultPriceId)) {
      return new NextResponse(JSON.stringify({
        error: 'Price not found',
        status: 400
      }))
    }
    const items = products.map((product) => ({
      price: product.defaultPriceId,
      quantity: 1
    }))

     const checkoutSession = await stripe.checkout.sessions.create({
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: 'payment',
      line_items: items
  })

  return NextResponse.json({
    checkoutUrl: checkoutSession.url
  })
  }catch(err){
    console.log(err)
    return NextResponse.error()
  }
}