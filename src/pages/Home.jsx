import React from 'react'
import Categories from "../components/Categories";
import PizzaBlock from '../components/PizzaBlock';
import SortPopup from "../components/SortPopup";

import { useDispatch, useSelector } from "react-redux";
import { setSortBy, setCategory } from "../redux/slices/filtersSlice";

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
    { name: 'названию', type: 'name', order: 'asc' },
];


const Home = () => {
    const dispatch = useDispatch();
    const { pizzas, status, error } = useSelector(state => state.pizzas);
    const { category, sortBy } = useSelector(state => state.filters);

    const onSelectCategory = (index) => {
        dispatch(setCategory(index));
    }

    const onSelectSortType = (type) => {
        dispatch(setSortBy(type));
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickItem={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    activeSortType={sortBy}
                    items={sortIems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {pizzas && pizzas.map((obj) => (
                    <PizzaBlock key={obj.id}  {...obj} />
                ))}
            </div>
        </div>
    )
}

export default Home;
