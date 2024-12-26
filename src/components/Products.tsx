import ManualCard from "./cards/ManualCard";
import ProductCard from "./cards/ProductCard";

const Products = () => {
  return (
    <div
      className="w-full flex flex-col gap-12 justify-center items-center px-4"
      id="products"
    >
      <h1 className="text-primary text-3xl font-bold text-center">
        Our Product
      </h1>
      <div className="w-full max-w-5xl flex space-y-12 md:space-y-0 flex-col-reverse md:flex-row justify-center items-center gap-12">
        <ProductCard />
        <ManualCard />
      </div>
    </div>
  );
};

export default Products;
