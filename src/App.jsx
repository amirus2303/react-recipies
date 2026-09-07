
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, RecipesListPage, RecipePage, Contact } from "./pages/index.js";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import {loader as recipesListLoader} from "./Pages/Home.jsx";
import {loader as recipesListPageLoader} from "./components/recipes-page/RecipesContainer.jsx";

const router = createBrowserRouter([
    { path: "/", element: <Home />, loader: recipesListLoader  },
    { path: "/recipes", element: <RecipesListPage />, loader: recipesListPageLoader },
    { path: "/recipes/:id", element: <RecipePage /> },
    { path: "/contact", element: <Contact /> },
]);

const App = () => {
    return <RouterProvider router={router} />;
};
export default App;
