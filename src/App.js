import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import PizzasService from "./API/PizzasService";

function App() {
    const [pizzas, setPizzas] = React.useState([])

    React.useEffect(() => {
        PizzasService.getAll().then(response => {setPizzas(response.data.pizzas)})  
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home pizzas={pizzas}/>} />
                <Route path="home" element={<Home pizzas={pizzas}/>} />
                <Route path="cart" element={<Cart />} />
            </Route>
        </Routes>
    );
}

export default App;
