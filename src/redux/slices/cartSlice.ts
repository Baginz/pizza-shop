import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartPizzas } from "../../interfaces/interfaces";

interface ICartObj {
  [id: number]: {items?: ICartPizzas[], totalPrice?: number}
}

interface ICartState {
  items: any ,
  totalPrice: any,
  totalCount: any,
}

const initialState: ICartState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}

const getTotalPrice = (arr: any) => arr.reduce((sum: number, obj: any) => obj.price + sum, 0);

const _get = (obj: any, path: string) => {
    const [firstKey, ...keys] = path.split(".");
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj: any, path: string) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
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

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                },
            };

            const totalCount = getTotalSum(newItems, "items.length");
            const totalPrice = getTotalSum(newItems, "totalPrice");

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        },
        deleteFromCart(state, action: PayloadAction<number>) {
            const newItems = {
                ...state.items,
            };
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;
            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
            };
        },
        plusCartItem(state, action: PayloadAction<number>) {
            const newObjItems = [
              ...state.items[action.payload].items,
              state.items[action.payload].items[0],
            ];
            const newItems = {
              ...state.items,
              [action.payload]: {
                items: newObjItems,
                totalPrice: getTotalPrice(newObjItems),
              },
            };
      
            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
      
            return {
              ...state,
              items: newItems,
              totalCount,
              totalPrice,
            };
          },
        minusCartItem(state, action: PayloadAction<number>) {
            const oldItems = state.items[action.payload].items;
            const newObjItems =
              oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            const newItems = {
              ...state.items,
              [action.payload]: {
                items: newObjItems,
                totalPrice: getTotalPrice(newObjItems),
              },
            };
      
            const totalCount = getTotalSum(newItems, 'items.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
      
            return {
              ...state,
              items: newItems,
              totalCount,
              totalPrice,
            };
          },
        clearCart(state) {
            state.items = {};
            state.totalPrice = 0;
            state.totalCount = 0;
        },
    },
});

export const { addToCart, deleteFromCart, plusCartItem, minusCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
