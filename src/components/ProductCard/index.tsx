import { IProduct, useCart } from "@/context/useCart";
import { formatPrice } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { MouseEvent } from "react";
import { CartButton } from "../CartButton";

type ProductCardProps = {
  className: string;
  product: IProduct;
};

export const ProductCard = ({ className, product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const handleAddToCart = (
    event: MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) => {
    event.preventDefault();
    addToCart(product);
  };

  return (
    <Link href={`product/${product.id}`}>
      <div
        className={`w-[696px] h-[656px] rounded-lg bg-gradient-bg shadow-card-shadow flex items-center justify-center cursor-pointer overflow-hidden relative group ${className}`}
      >
        <Image
          src={product.imageUrl}
          width={520}
          height={480}
          alt={product.name}
          className="object-cover bg-no-repeat"
        />

        <footer className="absolute bottom-1 left-1 right-1 p-6 rounded-md flex items-center justify-between bg-gray-background/60 translate-y-[110%] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex flex-col justify-start items-start">
            <span className="text-xl font-bold text-gray-title">
              {product.name}
            </span>
            <span className="text-2xl font-bold text-main-light">
              {product.price}
            </span>
          </div>
          <CartButton
            color="green"
            size="large"
            onClick={(e) => handleAddToCart(e, product)}
          />
        </footer>
      </div>
    </Link>
  );
};
