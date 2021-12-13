import React from 'react'
import Categories from "../components/Categories";
import PizzaBlock from '../components/PizzaBlock';
import SortPopup from "../components/SortPopup";

import { useSelector } from "react-redux";

const categoryNames = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
];
const sortIems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
  ];


const Home = () => {
    const { pizzas, status, error } = useSelector(state => state.pizzas);

    return (
        <div className="container">
            <div className="content__top">
                <Categories items={categoryNames} />
                <SortPopup items={sortIems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas && pizzas.map((obj) =>(
                    <PizzaBlock key={obj.id}  {...obj}/>
                ))}             
            </div>
        </div>
    )
}

export default Home;
