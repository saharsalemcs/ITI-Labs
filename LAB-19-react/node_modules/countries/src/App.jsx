import Header from "./components/Header";
import Home from "./components/Home";
import { CountriesProvider } from "./context/CountriesProvider";

function App() {
  return (
    <CountriesProvider>
      <div className=" min-h-screen bg-gray-50">
        <Header />
        <Home />
      </div>
    </CountriesProvider>
  );
}

export default App;
