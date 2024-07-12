import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TProduct = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  products: TProduct[];
};

const initialState: TInitialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<TProduct>) => {
      state.products.push({ ...action.payload, isCompleted: false });
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    toggleCompleted: (state, action: PayloadAction<string>) => {
      const task = state.products.find((item) => item.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
      if (task?.isCompleted) {
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );

        state.products.push(task);
      }
    },
  },
});

export const { addProduct, removeProduct, toggleCompleted } =
  productSlice.actions;

export default productSlice.reducer;
