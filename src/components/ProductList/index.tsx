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
    <div ref={sliderRef} className="flex items-center">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProductCard key={i} className={`keen-slider__slide`} />
      ))}
    </div>
  );
};
