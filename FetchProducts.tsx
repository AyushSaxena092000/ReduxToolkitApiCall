import { createAsyncThunk } from "@reduxjs/toolkit";

// Define the type for a product
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

// Define the async thunk to fetch products
export const fetchProducts = createAsyncThunk<Product[]>(
  "fetchProducts", 
  async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const final = await res.json();
    return final; // this will be an array of Product objects
  }
);
