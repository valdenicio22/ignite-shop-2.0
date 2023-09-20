import { X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { CartButton } from "../CartButton";

export const Cart = () => {
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
          <Dialog.Title className="text-xl font-bold mb-8">
            Sacola de compras
          </Dialog.Title>

          <section className="flex flex-col gap-8">
            {/* <p>Parece que seu carrinhho está vazio 😕</p> */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="max-w-[101px] h-[93px] flex items-center justify-center  rounded-lg bg-gradient-bg">
                  <Image
                    src={"/assets/abord2.svg"}
                    width={101}
                    height={93}
                    alt="lab"
                    className="object-cover bg-no-repeat"
                  />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h3 className="text-lg">Camiseta Iginite Lab</h3>
                  <strong className="font-bold text-lg">R$ 79,90</strong>
                  <button className="text-main font-bold mt-2">Remover</button>
                </div>
              </div>
            ))}
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
