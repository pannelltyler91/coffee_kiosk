import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:'cart',
    initialState:{value:[],count:0,},
    reducers:{
        addToCart: (state, action) => {
            // const item = action.payload.item
            // const id = action.payload.id
            // state.count += 1
            // state.value = [...state.value,{item,id}]
            // console.log(state.value)
            
            
        },
        deleteCartItem: (state, action) => {
            // const itemToDelete = state.value.find((element) => element.id === action.payload.id)
            // const newItemsList = state.value.filter ((element) => element.id !== itemToDelete.id)
            // state.value = newItemsList
        },
        
    }
})

export const {addToCart,deleteCartItem,hereToGo} = cartSlice.actions;
export default cartSlice.reducer;