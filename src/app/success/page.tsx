import Image from "next/image";
import Link from "next/link";

export default function Success() {
  return (
    <main className="w-[600px] mx-auto">
      <div className="flex items-center justify-center">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="bg-gradient-bg w-32 h-32 rounded-full flex items-center justify-center"
          >
            <Image
              src="/assets/explorer2.svg"
              width={110}
              height={110}
              alt={"explorer"}
              className="object-cover bg-no-repeat"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <h1 className="text-3xl font-bold">Compra efetuada!</h1>
        <p className="text-2xl mt-8">
          Uhuul <strong className="font-bold">Diego Fernandes</strong> sua
          compra de 3 camisetas já está a caminho da sua casa.
        </p>
        <Link
          href="/"
          className="font-bold text-xl text-main hover:text-main-light mt-16"
        >
          Voltar ao catálogo
        </Link>
      </div>
    </main>
  );
}
