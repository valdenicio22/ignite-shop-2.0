import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

type SuccessProps = {
  params: any;
  searchParams: {
    session_id: string;
  };
};

export default async function Success(props: SuccessProps) {
  const { session_id } = props.searchParams;

  if (!session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const sessionId = String(session_id);
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details?.name;
  const products = session.line_items?.data?.map((product) => {
    const { images, name } = product.price?.product as Stripe.Product;
    return {
      imageUrl: images[0],
      name,
    };
  });

  if (!products) return;

  return (
    <main className="w-[600px] mx-auto">
      <div className="flex items-center justify-center relative [&>*:not(:first-child)]:-ml-[50px]">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-gradient-bg w-32 h-32 rounded-full flex items-center justify-center shadow-images"
          >
            <Image
              src={product.imageUrl}
              width={110}
              height={110}
              alt={product.name}
              className="object-cover bg-no-repeat"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <h1 className="text-3xl font-bold">Compra efetuada!</h1>
        <p className="text-2xl mt-8">
          Uhuul <strong className="font-bold">{customerName}</strong> sua compra
          de {products.length} camisetas já está a caminho da sua casa.
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
