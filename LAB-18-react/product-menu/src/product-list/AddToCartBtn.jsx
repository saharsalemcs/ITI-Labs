function AddToCartBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-1/2 -bottom-5 cursor-pointer -translate-x-1/2 flex items-center gap-2 bg-white border border-rose-300 rounded-full px-5 py-2 text-sm font-semibold hover:border-red-800 hover:text-red-800 transition-colors"
    >
      <img src="/assets/icon-add-to-cart.svg" alt="" className="w-5" />
      <p className="text-xs">Add to Cart</p>
    </button>
  );
}

export default AddToCartBtn;
