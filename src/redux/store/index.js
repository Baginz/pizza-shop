import {configureStore} from '@reduxjs/toolkit';
import filtersSlice from '../slices/filtersSlice';
import pizzasSlice from '../slices/pizzasSlice';


export const store = configureStore({
    reducer: {
        pizzas: pizzasSlice,
        filters: filtersSlice,
    }
});