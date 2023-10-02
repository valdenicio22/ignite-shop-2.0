"use client";

import { Button } from "@/components/Button";
import { ProductSkeleton } from "@/components/ProductSkeleton";
import { IProduct, useCart } from "@/context/useCart";
import Image from "next/image";
import { MouseEvent, useCallback, useEffect, useState } from "react";

type ProductProps = {
  params: {
    id: string;
  };
};
export default function Product(props: ProductProps) {
  const [product, setProducts] = useState<IProduct>();
  const { addToCart, checkIfTheProductAlreadyExist } = useCart();

  const {
    params: { id },
  } = props;

  const getProducts = useCallback(async () => {
    try {
      const response = await fetch("/api/product", {
        method: "POST",
        body: JSON.stringify({ id }),
      });
      const data = await response.json();

      setProducts(data.product);
    } catch (err) {
      alert("Falha ao acessar dados do produto!");
    }
  }, [id]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

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
      {product ? (
        <div className="h-[41rem] flex items-center justify-center bg-gradient-bg rounded-lg">
          <Image
            src={product?.imageUrl ?? ""}
            width={520}
            height={480}
            alt={product?.name ?? ""}
            className="object-cover bg-no-repeat"
          />
        </div>
      ) : (
        <ProductSkeleton />
      )}
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
