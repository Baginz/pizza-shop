import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFiltersState { category: number | null; sortBy: string };

const initialState: IFiltersState = {  category: null, sortBy: "rating", };

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSortBy(state, action: PayloadAction<string>) {
            state.sortBy = action.payload;
        },
        setCategory(state, action: PayloadAction<number | null>) {
            state.category = action.payload;
        },
    },
});

export const { setSortBy, setCategory } = filtersSlice.actions;

export default filtersSlice.reducer;
