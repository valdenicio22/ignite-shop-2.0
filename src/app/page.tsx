import { ProductList } from "@/components/ProductList";
import { IProduct } from "@/context/useCart";
import { stripe } from "@/lib/stripe";
import { formatPrice } from "@/utils/utils";
import Stripe from "stripe";

const getData = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });
  return response;
};

export default async function Home() {
  const response = await getData();

  const products: IProduct[] = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    const productPrice = price.unit_amount ? price.unit_amount / 100 : 0;
    return {
      id: product.id,
      name: product.name,
      description: product?.description,
      imageUrl: product.images[0],
      price: formatPrice(productPrice),
      numberPrice: productPrice,
      defaultPriceId: price.id,
    };
  });
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}
