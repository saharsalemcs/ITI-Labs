function Cart() {
  return (
    <div className="bg-white rounded-xl p-6 w-75">
      <h2 className="text-[#bb370e] font-semibold mb-4 text-xl">
        Your Cart (0)
      </h2>

      <img
        src="/assets/illustration-empty-cart.svg"
        className="mx-auto"
        alt=""
      />

      <p className="text-rose-400 py-6 text-sm text-center">
        Your added items will appear here
      </p>
    </div>
  );
}

export default Cart;
