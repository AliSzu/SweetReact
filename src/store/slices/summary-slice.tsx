import { createSlice, current } from "@reduxjs/toolkit";
import Items from "../../types/Items";

const summarySlice = createSlice({
  name: "summary",
  initialState: {
    show: false,
    summaryItem: {} as Items
  },
  reducers: {
    showSummary(state) {
        state.show = true;
    },
    hideSummary(state) {
        state.show= false;
    },
    setSummaryItem(state, action)
    {
        state.summaryItem = {
            item: action.payload.product,
            quantity: action.payload.quantity,
            totalPrice: action.payload.quantity * action.payload.product.price,
        }
    }
}
});

export const summaryActions = summarySlice.actions;
export default summarySlice;
