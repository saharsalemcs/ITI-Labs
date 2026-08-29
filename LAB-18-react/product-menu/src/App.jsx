import { useEffect, useState } from "react";
import Cart from "./product-list/Cart";
import desserts from "./product-list/data";
import ProductCard from "./product-list/ProductCard";

const STORAGE_KEY = "desserts-cart";

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  function getQuantity(id) {
    const item = cartItems.find((i) => i.id === id);
    return item ? item.quantity : 0;
  }

  // first add as {id, name, price, quantity =1}
  function handleAdd(id) {
    const dessert = desserts.find((d) => d.id === id);

    setCartItems([
      ...cartItems,
      { id: dessert.id, name: dessert.name, price: dessert.price, quantity: 1 },
    ]);
  }

  function handleIncrease(id) {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function handleDecrease(id) {
    const item = cartItems.find((item) => item.id === id);
    if (item.quantity === 1) {
      handleRemove(id);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      );
    }
  }

  function handleRemove(id) {
    setCartItems(cartItems.filter((item) => item.id !== id));
  }
  function handleClear() {
    console.log("Order Confirmed");
    setCartItems([]);
  }

  return (
    <div className="min-h-screen bg-[#fcf8f5] p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-6">Desserts</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
            {desserts.map((dessert) => (
              <ProductCard
                key={dessert.id}
                dessert={dessert}
                quantityInCart={getQuantity(dessert.id)}
                onAdd={handleAdd}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
            ))}
          </div>
        </div>

        <div>
          <Cart
            cartItems={cartItems}
            onRemove={handleRemove}
            onClear={handleClear}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
