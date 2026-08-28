import Cart from "./product-list/Cart";
import desserts from "./product-list/data";
import ProductCard from "./product-list/ProductCard";
// import Card from "./social-links/Card";

function App() {
  return (
    <>
      {/* Task ONE */}
      {/* <Card /> */}

      {/* Task Two */}
      <div className="min-h-screen bg-[#fcf8f5] p-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-6">Desserts</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
              {desserts.map((dessert) => (
                <ProductCard key={dessert.id} dessert={dessert} />
              ))}
            </div>
          </div>

          <div>
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
