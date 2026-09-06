
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, RecipiesListPage, RecipePage, Contact } from "./pages/index.js";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {loader as recipiesListLoader} from "./Pages/Home.jsx";

const router = createBrowserRouter([
    { path: "/", element: <Home />, loader: recipiesListLoader  },
    { path: "/recipies", element: <RecipiesListPage />},
    { path: "/recipies/:id", element: <RecipePage /> },
    { path: "/contact", element: <Contact /> },
]);

const App = () => {
    return <RouterProvider router={router} />;
};
export default App;
