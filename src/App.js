import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { visitorCheck } from "./network";
import { router } from "./routes";
import './assets/fonts/fonts.css'



function App() {
    useEffect(() => {
        visitorCheck();
    }, []);
    return  (
        <RouterProvider router={router} />
    )
    
}

export default App;
