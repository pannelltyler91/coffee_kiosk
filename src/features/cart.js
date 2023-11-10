import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:'cart',
    initialState:{value:[],count:0,toGo:false},
    reducers:{
        addToCart: (state, action) => {
            // const item = action.payload.item
            // const id = action.payload.id
            // state.count += 1
            // state.value = [...state.value,{item,id}]
            // console.log(state.value)
            console.log(action.payload)
            
        },
        deleteCartItem: (state, action) => {
            // const itemToDelete = state.value.find((element) => element.id === action.payload.id)
            // const newItemsList = state.value.filter ((element) => element.id !== itemToDelete.id)
            // state.value = newItemsList
        },
        hereToGo: (state,action) => {
            action.payload.toGo === true? localStorage.setItem('toGo',true) : localStorage.setItem('toGo',false)
            

        }
        
    }
})

export const {addToCart,deleteCartItem,hereToGo} = cartSlice.actions;
export default cartSlice.reducer;