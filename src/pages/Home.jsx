import React from 'react'
import Categories from "../components/Categories";
import PizzaBlock from '../components/PizzaBlock';
import SortPopup from "../components/SortPopup";

const categoryNames = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
];


const Home = ({pizzas}) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={categoryNames} />
                <SortPopup items={['популярности', 'цене', 'алфавиту']} />
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
