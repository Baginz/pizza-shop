import {configureStore} from '@reduxjs/toolkit';
import cartSlice from '../slices/cartSlice';
import filtersSlice from '../slices/filtersSlice';
import pizzasSlice from '../slices/pizzasSlice';

// const rootReducer = combineReducers({
//     pizzasSlice,
//     filtersSlice,
//     cartSlice
// })

const store = configureStore({
    reducer: {
        pizzas: pizzasSlice,
        filters: filtersSlice,
        cart: cartSlice,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;