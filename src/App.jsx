import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, RecipiesListPage, RecipePage } from "./pages/index.js";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/recipies", element: <RecipiesListPage /> },
    { path: "/recipies/:id", element: <RecipePage /> },
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
