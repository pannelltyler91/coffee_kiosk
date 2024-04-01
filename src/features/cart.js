import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name:'cart',
    initialState:{value:[],count:0,toGo:false,total:0},
    reducers:{
        addToCart: (state, action) => {
                
                state.count +=1
                state.total += parseInt(action.payload.coffeePrice)
                state.value = [...state.value,action.payload]
                
            },
            
        deleteCartItem: (state, action) => {
            
        },
        hereToGo: (state,action) => {
            action.payload.toGo === true? localStorage.setItem('toGo',true) : localStorage.setItem('toGo',false)
            

        }
        
    }
})

export const {addToCart,deleteCartItem,hereToGo} = cartSlice.actions;
export default cartSlice.reducer;