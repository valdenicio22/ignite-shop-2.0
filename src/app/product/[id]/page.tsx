"use client";

import { Button } from "@/components/Button";
import { IProduct, useCart } from "@/context/useCart";
import { stripe } from "@/lib/stripe";
import { formatPrice } from "@/utils/utils";
import Image from "next/image";
import { MouseEvent } from "react";
import Stripe from "stripe";

async function getProductsData(productId: string): Promise<IProduct> {
  const response = await stripe.products.retrieve(productId, {
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
  return product;
}

type ProductProps = {
  params: {
    id: string;
  };
};
export default async function Product(props: ProductProps) {
  const {
    params: { id },
  } = props;
  const product = await getProductsData(id);
  const { addToCart, checkIfTheProductAlreadyExist } = useCart();

  const handleAddToCart = (
    event: MouseEvent<HTMLButtonElement>,
    prod: IProduct | undefined
  ): void => {
    if (!prod) return;
    event.preventDefault();
    addToCart(prod);
  };

  return (
    <section className="container grid grid-cols-product gap-16">
      <div className="h-[41rem] flex items-center justify-center bg-gradient-bg rounded-lg">
        <Image
          src={product?.imageUrl ?? ""}
          width={520}
          height={480}
          alt={product?.name ?? ""}
          className="object-cover bg-no-repeat"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-start">
        <h2 className="text-2xl font-bold">{product?.name}</h2>
        <strong className="text-2xl text-main-light mt-4">
          {product?.price}
        </strong>
        <p className="mt-12 text-lg">{product?.description}</p>
        <Button
          className="mt-auto"
          disabled={checkIfTheProductAlreadyExist(product?.id ?? "")}
          onClick={(e) => handleAddToCart(e, product)}
        >
          Colocar na sacola
        </Button>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const response = await stripe.products.list();
  const paths = response.data.map((product) => ({
    params: {
      id: product.id,
    },
  }));
  return paths;
}
