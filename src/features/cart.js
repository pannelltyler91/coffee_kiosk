import {createSlice} from '@reduxjs/toolkit'
import {addDoc,getDocs,updateDoc,collection,doc} from 'firebase/firestore';
import {db} from '../components/config/firebase';

export const cartSlice = createSlice({
    name:'cart',
    initialState:{value:[],count:0,toGo:false,total:0,phnNmbr:'',userExists:false},
    reducers:{
        addToCart: (state, action) => {
                console.log(action.payload)
                state.count +=1
                state.total += parseInt(action.payload.coffeePrice)
                state.value = [...state.value,action.payload]
                
            },
            
        deleteCartItem: (state, action) => {
            
        },
        addPhnNmbr: (state, action) => {
            state.phnNmbr += action.payload.digit;
            
        },
        clearPhnNmbr: (state, action) => {
            state.phnNmbr = '';
        },
        deletePhnNmbrDigit: (state, action) => {
            const newPhnNmbr= state.phnNmbr.slice(0,-1)
            state.phnNmbr = newPhnNmbr;
            console.log(state.phnNmbr)
        },
        checkRewards: async (state, action) => {
            console.log(action.payload)
            const usersCollectionRef = collection(db,"users")
                const usersData = await getDocs(usersCollectionRef);
                const filteredUsersData = usersData.docs.map((doc) => ({...doc.data(),id:doc.id,}));
                console.log(filteredUsersData)
                const foundUser = filteredUsersData.find((user) => user.phn_nmbr == state.phnNmbr)
                if(foundUser){
                    
                }else{

                }
                
            
            
        },
        createRewards: (state, action) => {
            
        },
        hereToGo: (state,action) => {
            action.payload.toGo === true? localStorage.setItem('toGo',true) : localStorage.setItem('toGo',false)
            

        }
        
    }
})

export const {addToCart,deleteCartItem,hereToGo,addPhnNmbr,clearPhnNmbr,deletePhnNmbrDigit,checkRewards} = cartSlice.actions;
export default cartSlice.reducer;