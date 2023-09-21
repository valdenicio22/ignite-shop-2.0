import { Button } from "@/components/Button";
import Image from "next/image";

export default function Product() {
  return (
    <section className="container grid grid-cols-product gap-16">
      <div className="h-[41rem] flex items-center justify-center bg-gradient-bg rounded-lg">
        <Image
          src="/assets/maratona2.svg"
          width={520}
          height={480}
          alt="maratona"
          className="object-cover bg-no-repeat"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-start">
        <h2 className="text-2xl font-bold">Camiseta Maratona</h2>
        <strong className="text-2xl text-main-light mt-4">R$ 79,90</strong>
        <p className="mt-12 text-lg">
          Tempus fermentum eget lacus, quis ante. Potenti sit pharetra,
          ridiculus amet. Bibendum pretium arcu arcu eget viverra at metus donec
          hendrerit. Rhoncus, nunc, eu at ac. At massa, fermentum amet ornare
          cras tincidunt nunc tincidunt. Netus lorem nulla nulla mattis integer
          velit dictum proin nibh.
        </p>
        <Button className="mt-auto">Colocar na sacola</Button>
      </div>
    </section>
  );
}
