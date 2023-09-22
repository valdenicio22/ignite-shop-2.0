import { ProductList } from "@/components/ProductList";
import { stripe } from "@/lib/stripe";
import { Product } from "@/types/product";
import Stripe from "stripe";

const getData = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });
  return response;
};

export default async function Home() {
  const response = await getData();

  const products: Product[] = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    const productPrice = price.unit_amount ? price.unit_amount / 100 : 0;
    return {
      id: product.id,
      name: product.name,
      description: product?.description,
      imageUrl: product.images[0],
      price: productPrice,
    };
  });
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}
