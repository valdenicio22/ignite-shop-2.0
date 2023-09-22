import { useCart } from "@/context/useCart";
import { formatPrice } from "@/utils/utils";
import { X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { Button } from "../Button";
import { CartButton } from "../CartButton";

export const Cart = () => {
  const { cartItems, removeCartItem, cartTotalPrice } = useCart();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content
          className={`fixed top-0 right-0 bottom-0 w-cart bg-gray-elements p-12 pt-0 shadow-cart-shadow flex flex-col`}
        >
          <Dialog.Close className="flex items-center justify-end my-6 text-gray-icon ">
            <X size={24} weight="bold" />
          </Dialog.Close>
          <Dialog.Title className="text-xl font-bold mb-8 text-gray-title">
            Sacola de compras
          </Dialog.Title>

          <section className="flex flex-col gap-6 flex-1 overflow-y-auto">
            {!cartItems.length && <p>Parece que seu carrinhho está vazio 😕</p>}

            {cartItems.map((product, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="h-24 flex items-center justify-center rounded-lg bg-gradient-bg">
                  <Image
                    src={product.imageUrl}
                    width={101}
                    height={93}
                    alt={product.name}
                    className="object-cover bg-no-repeat"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h3 className="text-lg">{product.name}</h3>
                  <strong className="font-bold text-lg text-gray-title">
                    {product.price}
                  </strong>
                  <button
                    className="text-main font-bold mt-2"
                    onClick={() => removeCartItem(product.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </section>
          <div className="flex flex-col justify-center gap-2 mt-auto">
            <div className="flex items-center justify-between">
              <p className="text-gray-title">Quantidade</p>
              <span className="text-lg">
                {cartItems.length} {cartItems.length < 1 ? "item" : "items"}
              </span>
            </div>
            <div className="flex items-center justify-between text-gray-title">
              <strong className="font-bold text-lg">Valor total</strong>
              <strong className="font-bold text-2xl">
                {formatPrice(cartTotalPrice)}
              </strong>
            </div>
          </div>
          <Button className="mt-14">Finalizar compras</Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
