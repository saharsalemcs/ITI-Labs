function CartItem({ item, onRemove }) {
  return (
    <li className="flex items-center justify-between py-3 border-b border-gray-200">
      <div>
        <p className="font-semibold">{item.name}</p>
        <p className="text-sm">
          <span className="font-semibold">{item.quantity}x</span>
          <span className="text-rose-400"> @ ${item.price.toFixed(2)}</span>
        </p>
      </div>
      <button
        className="rounded-full w-5 h-5 p border border-gray-200 flex items-center justify-center hover:border-[#bb370e] hover:text-[#bb370e] cursor-pointer"
        onClick={() => onRemove(item.id)}
      >
        x
      </button>
    </li>
  );
}

export default CartItem;
