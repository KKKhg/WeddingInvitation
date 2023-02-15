import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Sample from "./pages/Sample";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/sample",
        element: <Sample />
    }
], {
    basename: `${process.env.PUBLIC_URL}`
})