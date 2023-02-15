import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Sample from "./pages/Sample";


// export const router = createBrowserRouter([
export const router = createHashRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/sample",
        element: <Sample />
    }
])