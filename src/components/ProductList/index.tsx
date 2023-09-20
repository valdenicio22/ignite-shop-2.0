"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { ProductCard } from "../ProductCard";

export const ProductList = () => {
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
      {Array.from({ length: 6 }).map((_, i) => (
        <ProductCard key={i} className={`keen-slider__slide`} />
      ))}
    </div>
  );
};
