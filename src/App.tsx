import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { fetchPizzas } from "./redux/slices/pizzasSlice";


function App() {
    const dispatch = useDispatch();


    React.useEffect(() => {
        dispatch(fetchPizzas())
    }, [dispatch])

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="cart" element={<Cart />} />
            </Route>
        </Routes>
    );
}

export default App;
