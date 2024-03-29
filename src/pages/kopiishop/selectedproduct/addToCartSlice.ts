import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AddToCartProp = {
  successfullyAdded: boolean;
}
const initialState: AddToCartProp = {
  successfullyAdded: false
};

const addToCartSlice = createSlice({
  name: 'loadingShop',
  initialState,
  reducers: {
    setSuccessful: (state, action: PayloadAction<boolean>) => {
      state.successfullyAdded = action.payload;
    },
  },
});

export const { setSuccessful } = addToCartSlice.actions;
export default addToCartSlice.reducer;
