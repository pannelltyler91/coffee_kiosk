import {createSlice} from '@reduxjs/toolkit'
import {addDoc,getDocs,updateDoc,collection,doc} from 'firebase/firestore';
import {db} from '../components/config/firebase';

export const cartSlice = createSlice({
    name:'cart',
    initialState:{value:[],count:0,toGo:false,total:0,phnNmbr:'',rewardsCheckComplete:false},
    reducers:{
        addToCart: (state, action) => {
                console.log(action.payload)
                state.count +=1
                state.total += parseInt(action.payload.coffeePrice)
                state.value = [...state.value,action.payload]
                console.log(state.value)
                
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
                const foundUser = filteredUsersData.find((user) => user.phn_nmbr === state.phnNmbr)
                console.log(foundUser)
                if(foundUser){
                    const rewardsRef = doc(db,'users',foundUser.id)
                    if(foundUser.rewards_total === 10){
                        await updateDoc(rewardsRef, {
                            rewards_total: 0
                          })
                        const discountItemLocation = state.value.length - 1;
                        const discountItem = state.value[discountItemLocation]
                        const discount = discountItem.coffeePrice
                        state.total = state.total-discount
                        console.log(state.total)
                    }else{
                        await updateDoc(rewardsRef, {
                            rewards_total: foundUser.rewards_total + state.count
                          })
                        console.log('not there yet, but getting close')
                    }
                }else{
                 const usersCollectionRef2 = await addDoc(collection(db,"users"), {
                        phn_nmbr: state.phnNmbr,
                        rewards_total: state.count,

                      });
                      console.log("Document written with ID: ", usersCollectionRef2.id);
                      state.rewardsCheckComplete = true;
                }
                
            
            
        },
        hereToGo: (state,action) => {
            action.payload.toGo === true? localStorage.setItem('toGo',true) : localStorage.setItem('toGo',false)
            

        }
        
    }
})

export const {addToCart,deleteCartItem,hereToGo,addPhnNmbr,clearPhnNmbr,deletePhnNmbrDigit,checkRewards} = cartSlice.actions;
export default cartSlice.reducer;