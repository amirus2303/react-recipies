import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, RecipiesListPage, RecipePage, Contact } from "./pages/index.js";


import {loader as recipiesListLoader} from "./Pages/Home.jsx";

const router = createBrowserRouter([
    { path: "/", element: <Home />, loader: recipiesListLoader  },
    { path: "/recipies", element: <RecipiesListPage />},
    { path: "/recipies/:id", element: <RecipePage /> },
    { path: "/contact", element: <Contact /> },
]);

const App = () => {
    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            typeof window.initFoodixSliders === "function"
        ) {
            window.initFoodixSliders();
        }
    }, []);
    // Re-run slider init when Vite hot-updates modules during development
    if (import.meta.hot) {
        import.meta.hot.accept(() => {
            if (typeof window !== "undefined" && typeof window.initFoodixSliders === "function") {
                window.initFoodixSliders();
                console.log('initFoodixSliders triggered by HMR');
            }
        });
    }
    return <RouterProvider router={router} />;
};
export default App;
