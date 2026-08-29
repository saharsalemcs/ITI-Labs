function QuantityControl({ dessert, quantityInCart, onIncrease, onDecrease }) {
  return (
    <div className="flex items-center justify-between gap-4 absolute left-1/2 -bottom-5 text-white px-5 py-2 rounded-full -translate-x-1/2 bg-[#bb370e] w-36">
      <button
        className="cursor-pointer border border-white rounded-full w-5 h-5 flex items-center justify-center"
        onClick={() => onDecrease(dessert.id)}
      >
        -
      </button>
      <span className="font-semibold">{quantityInCart}</span>
      <button
        className="cursor-pointer border border-white rounded-full w-5 h-5 flex items-center justify-center"
        onClick={() => onIncrease(dessert.id)}
      >
        +
      </button>
    </div>
  );
}

export default QuantityControl;
