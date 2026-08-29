import AddToCartBtn from "./AddToCartBtn";
import ProductDetails from "./ProductDetails";
import QuantityControl from "./QuantityControl";

function ProductCard({
  dessert,
  quantityInCart,
  onAdd,
  onIncrease,
  onDecrease,
}) {
  const isInCart = quantityInCart > 0;
  return (
    <div>
      <div className="relative">
        <img
          src={dessert.image}
          className="object-cover rounded-xl w-full h-60"
        />
        {!isInCart ? (
          <AddToCartBtn onClick={() => onAdd(dessert.id)} />
        ) : (
          <QuantityControl
            dessert={dessert}
            quantityInCart={quantityInCart}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
        )}
      </div>

      <ProductDetails dessert={dessert} />
    </div>
  );
}

export default ProductCard;
