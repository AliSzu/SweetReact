import Item from "./Item";
import Items from "./Items";

export default interface Cart {
  items: Items[];
  quantity: number;
  totalPrice: number;
}