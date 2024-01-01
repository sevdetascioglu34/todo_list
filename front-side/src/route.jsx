
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import App from "./App.jsx";


export default function route(){
    const links = [
        {
            to: "/login",
            element : <Login/>
        },
        {
            to: "/",
            element: <Home/>
        }
    ];


    return (
        <BrowserRouter>
            <Routes>
                { links.map((link, index)=>
                    <Route key={index} path={link.to} element={link.element}/>
                )}
            </Routes>
        </BrowserRouter>
    )
}