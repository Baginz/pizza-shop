import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
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
