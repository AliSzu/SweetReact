import { createSlice } from "@reduxjs/toolkit";
import Items from "../../types/Items";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as Items[],
    quantity: 0,
    totalPrice: 0,
    changed: false,
  },
  reducers: {
    addItemToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      const existingItem = state.items.find(
        (items: Items) => items.item.id === newItem.product.id
      );
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.product.price * newItem.quantity;
        state.quantity += newItem.quantity;
        state.totalPrice += existingItem.totalPrice;
      } else {
        state.items.push({
          item: newItem.product,
          quantity: newItem.quantity,
          totalPrice: newItem.quantity * newItem.product.price,
        });
        state.quantity += newItem.quantity;
        state.totalPrice += newItem.quantity * newItem.product.price;
      }
    },
    removeItemFromCart(state, action) {
      state.changed = true;
      const id = action.payload.product.id;
      const existingItem = state.items.find(
        (items: Items) => items.item.id === id
      );
      if (existingItem) {
        existingItem.quantity--;
        state.quantity--;
        state.totalPrice = state.totalPrice - existingItem.item.price;
        if (existingItem.quantity === 0) {
          const items: Items[] = state.items.filter(
            (items: Items) => items.item.id !== id
          ) as any;
          state.items = items;
        } else {
          existingItem.totalPrice =
            existingItem.totalPrice - existingItem.item.price;
        }
      }
    },
    replaceItemCart(state, action) {
      if (action.payload.item.items.length > 0) {
        state.items = action.payload.item.items;
        state.quantity = action.payload.item.quantity;
        state.totalPrice = action.payload.item.totalPrice;
      }
    },
    checkoutCart(state) {
      state.changed = true;
      state.items = [];
      state.quantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
