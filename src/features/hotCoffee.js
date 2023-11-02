import { createSlice } from "@reduxjs/toolkit";

export const HotCoffeeSlice = createSlice({
    name: "hotcoffee",
    initialState: {
      value: [
        { id: 1, name: "Hot Americano", price: 3, quantity:0 },
        { id: 2, name: "Hot Cafe Latte", price: 4, quantity:0 },
        { id: 3, name: "Hot Vanilla Latte", price: 2, quantity:0 },
        { id: 4, name: "Hot Caramel Machiatto", price: 5, quantity:0 },
        { id: 5, name: "Hot Cafe Mocha", price: 4, quantity:0 },
      ],
    },
    reducers: {},
  });
  
  export default HotCoffeeSlice.reducer;