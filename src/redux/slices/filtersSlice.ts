import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPizzas } from "../../interfaces/interfaces";

interface IFiltersState { category: number | null; sortBy: keyof IPizzas };

const initialState: IFiltersState = {  category: null, sortBy: "rating", };

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSortBy(state, action: PayloadAction<keyof IPizzas>) {
            state.sortBy = action.payload;
        },
        setCategory(state, action: PayloadAction<number | null>) {
            state.category = action.payload;
        },
    },
});

export const { setSortBy, setCategory } = filtersSlice.actions;

export default filtersSlice.reducer;
