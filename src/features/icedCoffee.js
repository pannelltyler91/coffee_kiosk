import { createSlice } from "@reduxjs/toolkit";

export const IcedCoffeeSlice = createSlice({
  name: "icedcoffee",
  initialState: {
    value: [
      { id: 1, name: "Iced Americano", price: 3, quantity:0 },
      { id: 2, name: "Iced Cafe Latte", price: 4, quantity:0 },
      { id: 3, name: "Iced Vanilla Latte", price: 2, quantity:0 },
      { id: 4, name: "Iced Caramel Machiatto", price: 5, quantity:0 },
      { id: 5, name: "Iced Cafe Mocha", price: 4, quantity:0 },
    ],
  },
  reducers: {},
});

export default IcedCoffeeSlice.reducer;