import {createSlice} from '@reduxjs/toolkit'
import {addDoc,getDocs,getDoc,updateDoc,collection,doc} from 'firebase/firestore';
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
        saveCart: (state, action) => {
            localStorage.setItem('cart',JSON.stringify(state.value)) 
            localStorage.setItem('count',JSON.stringify(state.count)) 
            localStorage.setItem('total',JSON.stringify(state.total))     
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
            const usersCollectionRef = collection(db,"users")
                const usersData = await getDocs(usersCollectionRef);
                const filteredUsersData = usersData.docs.map((doc) => ({...doc.data(),id:doc.id,}));
                const foundUser = filteredUsersData.find((user) => user.phn_nmbr === state.phnNmbr)
                const count = JSON.parse(localStorage.getItem('count'))
                if(foundUser){
                    const rewardsRef = doc(db,'users',foundUser.id)
                    if(foundUser.rewards_total === 10){
                        //use current rewards and update rewards total
                        await updateDoc(rewardsRef, {
                            rewards_total: count
                          })
                        //find order get last item in cart and update order total by subtracting price of last item
                        const OrderRef = doc(db, "Orders", localStorage.getItem('orderId'));
                        const orderData = await getDoc(OrderRef);
                        const order = orderData.data();
                        const discountItemLocation = order.cart.length - 1;
                        const discountItem = order.cart[discountItemLocation]
                        console.log(discountItem)
                        const discount = discountItem.coffeePrice
                        //changing price of discounted item to 0 in cart
                        const newCart = []
                        order.cart.map((item) => {
                            if (item.coffeeId === discountItem.coffeeId){
                                //change price of discounted item
                                item.coffeePrice = 0
                                newCart.push(item)

                            }else{
                                newCart.push(item)

                            }
                            return(newCart)
                        })

                        await updateDoc(OrderRef,{
                            cart_total: order.cart_total - discount,
                            cart:newCart
                        })
                    }else{
                        //does not have enough rewards : add this order rewards
                        await updateDoc(rewardsRef, {
                            rewards_total: foundUser.rewards_total + count
                          })
                        console.log('not there yet, but getting close')
                    }
                }else{  
                    //doesn't have rewards account : create account
                 const usersCollectionRef2 = await addDoc(collection(db,"users"), {
                        phn_nmbr: state.phnNmbr,
                        rewards_total: count,

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

export const {addToCart,deleteCartItem,hereToGo,addPhnNmbr,clearPhnNmbr,deletePhnNmbrDigit,checkRewards,saveCart} = cartSlice.actions;
export default cartSlice.reducer;