import CartItem from "./CartItem";

function Cart({ cartItems, onRemove, onClear }) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );

  return (
    <div className="bg-white rounded-xl p-6 w-75">
      <h2 className="text-[#bb370e] font-semibold mb-4 text-xl">
        Your Cart ({totalItems})
      </h2>
      {cartItems.length === 0 ? (
        <>
          <img
            src="/assets/illustration-empty-cart.svg"
            className="mx-auto"
            alt=""
          />

          <p className="text-rose-400 py-6 text-sm text-center">
            Your added items will appear here
          </p>
        </>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} onRemove={onRemove} />
            ))}
          </ul>
          {/* order */}

          <div className="flex items-center justify-between mt-4">
            <span>Order Total</span>
            <span className="font-bold text-xl text-[#bb370e]">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <button
            onClick={onClear}
            className="mt-6 w-full rounded-full bg-[#bb370e] cursor-pointer py-4 font-semibold text-white"
          >
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
