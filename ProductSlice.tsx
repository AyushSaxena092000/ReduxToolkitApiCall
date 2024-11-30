import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "./FetchProducts";

// Define types for the state
interface ProductState {
  data: any | null; // You can replace `any` with a more specific type based on your product data structure
  isLoader: boolean;
  isError: boolean;
}

// Initial state
const initialState: ProductState = {
  data: null,
  isLoader: false,
  isError: false,
};

// Create the slice
const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoader = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<any>) => { // Type the payload here as needed
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoader = false;
      state.isError = true;
    });
  },
});

// Export the reducer
export default ProductSlice.reducer;
