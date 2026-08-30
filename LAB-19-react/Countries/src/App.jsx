import AppLayout from "./components/AppLayout";
import CountryDetails from "./pages/CountryDetails";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/country/:id", element: <CountryDetails /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
