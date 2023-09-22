import { Button } from "@/components/Button";
import { stripe } from "@/lib/stripe";
import { Product } from "@/types/product";
import { formatPrice } from "@/utils/utils";
import Image from "next/image";
import Stripe from "stripe";

async function getProductsData(productId: string): Promise<Product> {
  const response = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });
  const productPrice = response.default_price as Stripe.Price;

  const product = {
    id: response.id,
    name: response.name,
    description: response.description ? response.description : "",
    price: productPrice.unit_amount ? productPrice.unit_amount / 100 : 0,
    imageUrl: response.images[0],
  };
  return product;
}

type ProductProps = {
  params: {
    id: string;
  };
};
export default async function Product(props: ProductProps) {
  const {
    params: { id },
  } = props;
  const product = await getProductsData(id);

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
        <strong className="text-2xl text-main-light mt-4">
          {product.price && formatPrice(product.price)}
        </strong>
        <p className="mt-12 text-lg">{product.description}</p>
        <Button className="mt-auto">Colocar na sacola</Button>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const response = await stripe.products.list();
  const paths = response.data.map((product) => ({
    params: {
      id: product.id,
    },
  }));
  return paths;
}
