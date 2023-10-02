import { Handbag } from "@phosphor-icons/react";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "p-3 ml-auto disabled:opacity-60 disabled:cursor-not-allowed rounded-lg relative",
  variants: {
    color: {
      gray: "bg-gray-elements text-gray-icon",
      green: "bg-main-light text-white",
    },
    size: {
      regular: "text-2xl",
      large: "text-[2rem]",
    },
  },
  defaultVariants: {
    color: "gray",
    size: "regular",
  },
});

type CartButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    cartQuantity?: number;
  };

const CartButton = forwardRef<HTMLButtonElement, CartButtonProps>(
  ({ cartQuantity = 0, size, color, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={button({ size, color, className })}
        {...props}
      >
        <Handbag weight="bold" />
        {!!cartQuantity && (
          <span className="flex items-center justify-center w-[28px] h-[28px] rounded-full bg-main border-[3px] border-gray-background text-white font-bold text-sm absolute -top-3 -right-2.5">
            {cartQuantity}
          </span>
        )}
      </button>
    );
  }
);

CartButton.displayName = "CartButton";
export { CartButton };
