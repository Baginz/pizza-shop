import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartPizzas } from "../../interfaces/interfaces";

//переделать тут все нормально без эни и иммутабельности
interface ICartObj {
    [id: string]: { items: ICartPizzas[]; totalPrice: number };
}

interface ICartState {
    items: ICartObj;
    totalPrice: number;
    totalCount: number;
}

const initialState: ICartState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const getTotalPrice = (arr: ICartPizzas[]) =>
    arr.reduce((sum: number, obj: ICartPizzas) => obj.price + sum, 0);

const _get = (obj: any, path: string) => {
    const [firstKey, ...keys] = path.split(".");
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj: ICartObj, path: string) => {
    return Object.values(obj).reduce((sum: number, obj: any) => {
        const value: number = _get(obj, path);
        return sum + value;
    }, 0);
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<ICartPizzas>) {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            state.items[action.payload.id] = {
                items: currentPizzaItems,
                totalPrice: getTotalPrice(currentPizzaItems),
            };
            state.totalCount = getTotalSum(state.items, "items.length");
            state.totalPrice = getTotalSum(state.items, "totalPrice");
        },
        deleteFromCart(state, action: PayloadAction<number>) {
            delete state.items[action.payload];
            state.totalCount = getTotalSum(state.items, "items.length");
            state.totalPrice = getTotalSum(state.items, "totalPrice");
        },
        plusCartItem(state, action: PayloadAction<number>) {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0],
            ];

            state.items[action.payload] = {
                items: newObjItems,
                totalPrice: getTotalPrice(newObjItems),
            };
            state.totalCount = getTotalSum(state.items, "items.length");
            state.totalPrice = getTotalSum(state.items, "totalPrice");
        },
        minusCartItem(state, action: PayloadAction<number>) {
            const newObjItems =
                state.items[action.payload].items.length > 1
                    ? state.items[action.payload].items.slice(1)
                    : state.items[action.payload].items;

            state.items[action.payload] = {
                items: newObjItems,
                totalPrice: getTotalPrice(newObjItems),
            };
            state.totalCount = getTotalSum(state.items, "items.length");
            state.totalPrice = getTotalSum(state.items, "totalPrice");
        },
        clearCart(state) {
            state.items = {};
            state.totalPrice = 0;
            state.totalCount = 0;
        },
    },
});

export const {
    addToCart,
    deleteFromCart,
    plusCartItem,
    minusCartItem,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
