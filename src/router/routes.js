import { createBrowserRouter } from "react-router-dom";
import ReactZxing from "../components/react-zxing/react-zxing";
import ReactScanBot from "../components/react-scanbot";
import App from "../App";

export const routes = createBrowserRouter([
    {
        element: <App />,
        path: "/",
        children: [
            {
                path: "/react-zxing",
                element: <ReactZxing />
            },
            {
                path: "/scanbot",
                element: <ReactScanBot />
            }
        ]
    },
]);