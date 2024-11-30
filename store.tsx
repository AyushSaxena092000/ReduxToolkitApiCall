import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './ProductSlice';

// Define RootState based on the reducer structure
export interface RootState {
  product: ReturnType<typeof ProductReducer>;
}

// Create the Redux store
export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});

// Export AppDispatch for type safety when dispatching actions
export type AppDispatch = typeof store.dispatch;
