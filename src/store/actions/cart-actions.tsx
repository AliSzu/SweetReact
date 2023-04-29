import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { cartActions } from "../slices/cart-slice";
import Cart from "../../types/Cart";

export const addCartItem = (cart: Cart) => {
  return async (dispatch: any) => {
    const response = await setDoc(
      doc(db, "item", "y38zLIyS8uJLj5srMtwT"),
      {
        item: {
          items: cart.items,
          quantity: cart.quantity,
          totalPrice: cart.totalPrice
        },
      },
      { merge: true }
    );
  };
};

export const fetchCartData = () => {
  return async (dispatch: any) => {
    const fetchCart = async () => {
      const docRef = doc(db, "item", "y38zLIyS8uJLj5srMtwT");
      const docSnap = await getDoc(docRef);
      return docSnap.data();
    };

    try {
      const cartData = await fetchCart();
      dispatch(cartActions.replaceItemCart(cartData));
    } catch (error) {
      console.log("Fetching Cart Data Failed");
    }
  };
};
