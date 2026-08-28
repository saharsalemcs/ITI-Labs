import AddToCartBtn from "./AddToCartBtn";
import ProductDetails from "./ProductDetails";

function ProductCard({ dessert }) {
  return (
    <div>
      <div className="relative">
        <img
          src={dessert.image}
          className="object-cover rounded-xl w-full h-60"
        />

        <div className="absolute left-1/2 -bottom-5 -translate-x-1/2">
          <AddToCartBtn />
        </div>
      </div>

      <ProductDetails dessert={dessert} />
    </div>
  );
}

export default ProductCard;
