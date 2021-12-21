import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { fetchPizzas } from "./redux/slices/pizzasSlice";
import { useAppDispatch } from "./hooks/useRedux";


function App() {
    const dispatch = useAppDispatch();


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
