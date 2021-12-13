import { createSlice } from '@reduxjs/toolkit';



const filtersSlice = createSlice({
    name: 'pizzas',
    initialState: {
        category: 0,
        sortBy: 'popular'
    },
    reducers: {
        setSortBy(state, action) {
            state.sortBy = action.payload;
        },
        setCategory(state, action) {
            state.category = action.payload;
        }
    },
});

const {setSortBy, setCategory} = filtersSlice.actions;

export default filtersSlice.reducer; 