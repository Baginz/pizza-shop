import {configureStore} from '@reduxjs/toolkit';
import cartSlice from '../slices/cartSlice';
import filtersSlice from '../slices/filtersSlice';
import pizzasSlice from '../slices/pizzasSlice';


export const store = configureStore({
    reducer: {
        pizzas: pizzasSlice,
        filters: filtersSlice,
        cart: cartSlice,
    }
});