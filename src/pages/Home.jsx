import React from 'react'
import Categories from "../components/Categories";
import PizzaBlock from '../components/PizzaBlock';
import SortPopup from "../components/SortPopup";

import { usePizzas } from "../hooks/usePizzas";
import { useDispatch, useSelector } from "react-redux";
import { setSortBy, setCategory } from "../redux/slices/filtersSlice";
import {addToCart} from '../redux/slices/cartSlice'
import LoadingBlock from '../components/LoadingBlock';

const categoryNames = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
];
const sortIems = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'названию', type: 'name', order: 'asc' },
];


const Home = () => {
    const dispatch = useDispatch();
    const { pizzas, status, error } = useSelector(state => state.pizzas);
    const { category, sortBy } = useSelector(state => state.filters);
    const { items } = useSelector(state => state.cart);
    const sortedAndCategoryPizzas = usePizzas(pizzas, category, sortBy);

    const onSelectCategory = (index) => {
        dispatch(setCategory(index));
    }

    const onSelectSortType = (type) => {
        dispatch(setSortBy(type));
    }

    const handleAddPizzaToCart = (obj) => {
        dispatch(addToCart(obj));
      };

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
                {error && <h2>An error occured: {error}</h2>}
                {status !== 'loading'
                    ? sortedAndCategoryPizzas && sortedAndCategoryPizzas.map((obj) => (
                        <PizzaBlock
                            key={obj.id}
                            addedCount={items[obj.id] && items[obj.id].items.length} {...obj}
                            onClickAddPizza={handleAddPizzaToCart}
                        />))
                    : Array(12)
                        .fill(0)
                        .map((_, index) => <LoadingBlock key={index} />)
                }
            </div>
        </div>
    )
}

export default Home;
