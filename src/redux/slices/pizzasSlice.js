import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzas',
    async function(_, {rejectWithValue}) {
        try {
         
            
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deletePizza = createAsyncThunk(
    'pizzas/deletePizza',
    async function(id, {rejectWithValue, dispatch}) {
        try {
           

        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addNewPizza = createAsyncThunk(
    'pizzas/addNewPizza',
    async function (text, {rejectWithValue, dispatch}) {
        try {
           
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

const pizzasSlice = createSlice({
    name: 'pizzas',
    initialState: {
        pizzas: [],
        status: null,
        error: null,
    },
    reducers: {
        addPizza(state, action) {
            state.pizzas.push(action.payload);
        },
        removePizza(state, action) {
            state.pizzas = state.pizzas.filter(pizza => pizza.id !== action.payload.id);
        }
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.pizzas = action.payload;
        },
        [fetchPizzas.rejected]: setError,
        [deletePizza.rejected]: setError,
    },
});

const {addPizza, removePizza} = pizzasSlice.actions;

export default pizzasSlice.reducer;