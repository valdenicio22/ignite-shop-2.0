import { IProduct } from "@/context/useCart";
import { stripe } from "@/lib/stripe";
import { formatPrice } from "@/utils/utils";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(req: Request){
  return NextResponse.json({response: 'GET Request'})
}

export async function POST(req: Request){
  try{
    const body = await req.json()
  const response = await stripe.products.retrieve(body.id, {
    expand: ["default_price"],
  });
  const price = response.default_price as Stripe.Price;
  const productPrice = price.unit_amount ? price.unit_amount / 100 : 0;

  const product: IProduct = {
    id: response.id,
    name: response.name,
    description: response.description ? response.description : "",
    price: formatPrice(productPrice),
    numberPrice: productPrice,
    imageUrl: response.images[0],
    defaultPriceId: price.id,
  };

  return NextResponse.json({product})
  
  }catch(err){
    alert("Falha ao redirecionar ao checkout!");
  }
  
};

