function ProductDetails({ dessert }) {
  return (
    <div className="mt-8">
      <p className="text-rose-400 text-sm">{dessert.category}</p>
      <h3 className="font-semibold text-lg">{dessert.name}</h3>
      <p className=" font-semibold text-[#bb370e]">
        {dessert.price.toFixed(2)}
      </p>
    </div>
  );
}

export default ProductDetails;
