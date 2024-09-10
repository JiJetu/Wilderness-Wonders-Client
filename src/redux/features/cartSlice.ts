import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TCart = {
  _id: string | undefined;
  pName: string;
  price: number;
  oderQuantity: number;
  productQuantity: number;
  description: string;
  category: string;
  images: string;
};

type TInitialState = {
  carts: TCart[];
};

const initialState: TInitialState = {
  carts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TCart>) => {
      const existingProduct = state.carts.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        const newQuantity =
          existingProduct.oderQuantity + action.payload.oderQuantity;
        if (newQuantity <= existingProduct.productQuantity) {
          existingProduct.oderQuantity = newQuantity;
        } else {
          existingProduct.oderQuantity = existingProduct.productQuantity;
        }
      } else {
        state.carts.push({ ...action.payload });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.carts = state.carts.filter(
        (product) => product._id !== action.payload
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ _id: string; quantity: number }>
    ) => {
      const product = state.carts.find(
        (item) => item._id === action.payload._id
      );
      if (product) {
        product.oderQuantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
