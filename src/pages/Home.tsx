import React from 'react'
import Categories from "../components/Categories";
import PizzaBlock from '../components/PizzaBlock';
import SortPopup from "../components/SortPopup";

import { usePizzas } from "../hooks/usePizzas";
import { setSortBy, setCategory } from "../redux/slices/filtersSlice";
import {addToCart} from '../redux/slices/cartSlice'
import LoadingBlock from '../components/LoadingBlock';
import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { ICartPizzas, IPizzas } from '../interfaces/interfaces';

type sortItemsObj = {
    name: string,
    type: keyof IPizzas,
    order: string,
}

const categoryNames: string[] = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
];
const sortIems: sortItemsObj[] = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'названию', type: 'name', order: 'asc' },
];


const Home:React.FC = () => {
    const dispatch = useAppDispatch();
    const { pizzas, status, error } = useAppSelector(state => state.pizzas);
    const { category, sortBy } = useAppSelector(state => state.filters);
    const { items } = useAppSelector(state => state.cart);
    const sortedAndCategoryPizzas = usePizzas(pizzas, category, sortBy);

    const onSelectCategory = (index: number | null) => {
        dispatch(setCategory(index));
    }

    const onSelectSortType = (type: keyof IPizzas) => {
        dispatch(setSortBy(type));
    }

    const handleAddPizzaToCart = (obj: ICartPizzas) => {
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
                    ? sortedAndCategoryPizzas && sortedAndCategoryPizzas.map((obj: IPizzas) => (
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
