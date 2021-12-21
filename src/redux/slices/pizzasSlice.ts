import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import PizzasService from "../../API/PizzasService";
import { IPizzas } from "../../interfaces/interfaces";

interface IPizzasState {
    pizzas: IPizzas[];
    status: string | null;
    error: any;
}

const initialState: IPizzasState = {
    pizzas: [],
    status: null,
    error: null,
};

export const fetchPizzas = createAsyncThunk(
    "pizzas/fetchPizzas",
    async function (_, { rejectWithValue }) {
        try {
            const response = await PizzasService.getAll();
            return response.data.pizzas;
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
);

const pizzasSlice = createSlice({
    name: "pizzas",
    initialState,
    reducers: {
        setPizzas(state, action) {
            state.pizzas = action.payload;
        },
        addPizza(state, action: PayloadAction<IPizzas>) {
            state.pizzas.push(action.payload);
        },
        removePizza(state, action) {
            state.pizzas = state.pizzas.filter(
                (pizza) => pizza.id !== action.payload.id
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = "loading";
            state.error = null;
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.status = "resolved";
            state.pizzas = action.payload;
        });
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        });
    },
});

export const { addPizza, removePizza } = pizzasSlice.actions;

export default pizzasSlice.reducer;

// {
//         [fetchPizzas.pending]: (state) => {
//             state.status = 'loading';
//             state.error = null;
//         },
//         [fetchPizzas.fulfilled]: (state, action) => {
//             state.status = 'resolved';
//             state.pizzas = action.payload;
//         },
//         [fetchPizzas.rejected]: setError,
// },

// const setError = (state, action) => {
//     state.status = "rejected";
//     state.error = action.payload;
// };
