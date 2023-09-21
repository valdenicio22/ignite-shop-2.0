import { Button } from "@/components/Button";
import { stripe } from "@/lib/stripe";
import { formatPrice } from "@/utils/utils";
import Image from "next/image";
import Stripe from "stripe";

export const getProductData = async (id: string) => {
  const response = stripe.products.retrieve(id, {
    expand: ["default_price"],
  });
  return response;
};

type ProductProps = {
  params: {
    id: string;
  };
};
export default async function Product({ params: { id } }: ProductProps) {
  const response = await getProductData(id);
  const { id: prodId, name, description, default_price, images } = response;
  const productPrice = default_price as Stripe.Price;

  const product = {
    id: prodId,
    name,
    description,
    price: productPrice.unit_amount ? productPrice.unit_amount / 100 : 0,
    imageUrl: images[0],
  };
  console.log("response product page", response.default_price);
  return (
    <section className="container grid grid-cols-product gap-16">
      <div className="h-[41rem] flex items-center justify-center bg-gradient-bg rounded-lg">
        <Image
          src={product.imageUrl}
          width={520}
          height={480}
          alt={product.name}
          className="object-cover bg-no-repeat"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-start">
        <h2 className="text-2xl font-bold">{product.name}</h2>
        <strong className="text-2xl text-main-light mt-4">{formatPrice(product.price)}</strong>
        <p className="mt-12 text-lg">
          {product.description}
        </p>
        <Button className="mt-auto">Colocar na sacola</Button>
      </div>
    </section>
  );
}
