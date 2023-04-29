import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./slices/item-slice";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import cartSlice from "./slices/cart-slice";
import summarySlice from "./slices/summary-slice";

const store = configureStore({
  reducer: {
    item: itemSlice.reducer,
    cart: cartSlice.reducer,
    summary: summarySlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export default store;
