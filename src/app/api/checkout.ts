// import { IProduct } from "@/context/useCart";
// import { stripe } from "@/lib/stripe";
// import { NextApiRequest, NextApiResponse } from "next";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(products: IProduct)  {
//   try {
//     const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
//   const cancelUrl = `${process.env.NEXT_URL}`
    
//     if(req.method !== 'POST') return res.status(405).json({error: 'Method not allowed.'})

//     if(!priceId) {
//       return new NextResponse(JSON.stringify({
//         error: 'Price not found',
//         status: 400
//       }))
//     }

//      const checkoutSession = await stripe.checkout.sessions.create({
//     success_url: successUrl,
//     cancel_url: cancelUrl,
//     mode: 'payment',
//     line_items: [
//       {
//         price: priceId,
//         quantity: 1
//       }
//     ]
//   })

//   return NextResponse.json({
//     checkoutUrl: checkoutSession.url
//   })
//   }catch(err){
//     console.log(err)
//     return NextResponse.error()
//   }
// }