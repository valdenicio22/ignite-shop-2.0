import { Handbag } from "@phosphor-icons/react";
import { ButtonHTMLAttributes, forwardRef } from "react";

type CartButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const CartButton = forwardRef<HTMLButtonElement, CartButtonProps>(
  ({ ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className="p-3 bg-gray-elements ml-auto disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Handbag className="text-gray-icon " size={24} weight="bold" />
      </button>
    );
  }
);

CartButton.displayName = "CartButton";
export { CartButton };
