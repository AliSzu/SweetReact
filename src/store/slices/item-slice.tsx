import { createSlice, current } from "@reduxjs/toolkit";
import Item from "../../types/Item";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    items: [] as Item[],
    focusItem: {} as Item,
  },
  reducers: {
    addItemtoArray(state, action) {
      const products = action.payload.product;
      products.forEach((element: any) => {
        const exists = state.items.find((item: any) => item.id === element.id);
        if (!exists) {
          const item: Item = {
            id: element.id,
            name: element.name,
            price: element.price,
            imgSrc: element.imgSrc,
            shortDesc: element.shortDesc,
            title: element.title,
            longDesc: element.longDesc,
            allergens: element.allergens
          };
          state.items.push(item);
        }
      });
    },
    setFocusItem(state, action) {
        state.focusItem = {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          imgSrc: action.payload.imgSrc,
          shortDesc: action.payload.shortDesc,
          title: action.payload.title,
          longDesc: action.payload.longDesc,
          allergens: action.payload.allergens
        };

    },
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice;
