import Image from "next/image";
import { CartButton } from "../CartButton";

type ProductCardProps = {
  className: string;
};

export const ProductCard = ({ className }: ProductCardProps) => {
  return (
    <div
      className={`w-[696px] h-[656px] rounded-lg bg-gradient-bg shadow-card-shadow flex items-center justify-center cursor-pointer overflow-hidden relative group ${className}`}
    >
      <Image
        src={"/assets/abord2.svg"}
        width={520}
        height={480}
        alt=""
        className="object-cover bg-no-repeat"
      />

      <footer className="absolute bottom-1 left-1 right-1 p-8 rounded-md flex items-center justify-between bg-gray-background/60 translate-y-[110%] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="flex flex-col justify-start items-start">
          <span className="text-lg font-bold text-gray-title">
            Camiseta Beyond the Limits
          </span>
          <span className="text-2xl font-bold text-main-light">R$ 79.90</span>
        </div>
        <CartButton />
      </footer>
    </div>
  );
};
