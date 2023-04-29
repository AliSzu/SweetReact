import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { itemActions } from "../slices/item-slice";

export const fetchItemsData = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const docRef = doc(db, "item", "2Mfbdkw9ORQOM9aFo5Wa");
      const docSnap = await getDoc(docRef);
      return docSnap.data();
    };
    try {
      const cartData = await fetchData();
      dispatch(itemActions.addItemtoArray(cartData));
    } catch (error) {
      console.log("Fetching Item Data Failed");
    }
  };
};

export const fetchItemById = (id: string) => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const docRef = doc(db, "item", "2Mfbdkw9ORQOM9aFo5Wa");
      const docSnap = await getDoc(docRef);
      const items = docSnap.data();
      return docSnap.data();
    };
    try {
      const cartData = await fetchData();
      const item = cartData?.product.find((x: any) => x.id === id);
      if (item) {
        dispatch(itemActions.setFocusItem(item));
      }
    } catch (error) {
      console.log(":(");
    }
  };
};
