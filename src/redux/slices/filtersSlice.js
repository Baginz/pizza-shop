import { createSlice } from '@reduxjs/toolkit';



const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        category: null,
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

export const {setSortBy, setCategory} = filtersSlice.actions;

export default filtersSlice.reducer; 