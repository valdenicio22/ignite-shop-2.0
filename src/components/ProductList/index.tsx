"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ProductCard } from "../ProductCard";
import { IProduct } from "@/context/useCart";

type ProductListProps = {
  products: IProduct[];
};

export const ProductList = ({ products }: ProductListProps) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  });
  return (
    <div
      ref={sliderRef}
      className="w-full h-full max-w-[calc(100vw-(100vw-1180px)/2)] flex items-center ml-auto"
    >
      {products.map((product, i) => (
        <ProductCard
          key={product.id}
          className={`keen-slider__slide`}
          product={product}
        />
      ))}
    </div>
  );
};
