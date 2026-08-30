import { Outlet } from "react-router-dom";
import { CountriesProvider } from "../context/CountriesProvider";
import Header from "./Header";

function AppLayout() {
  return (
    <CountriesProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Outlet />
      </div>
    </CountriesProvider>
  );
}

export default AppLayout;
