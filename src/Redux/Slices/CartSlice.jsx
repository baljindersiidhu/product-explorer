import { createSlice } from "@reduxjs/toolkit";

const savedCart = localStorage.getItem("cart");

const initialState = {
  items: savedCart ? JSON.parse(savedCart) : [],
};

const cartSlice= createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtoCart:(state,action)=>{
            console.log(action.payload);
            const existingItem=state.items.find(
                (item)=>item.id===action.payload.id
            );
            if(existingItem){
                existingItem.quantity+=1;
            }
            else{
                state.items.push({
                    ...action.payload,
                    quantity:1,
                })
            }
        },
        increaseQuantity: (state,action)=>{
            const item= state.items.find((item)=>
            item.id===action.payload);

            if(item){
                item.quantity+=1;
            }

        },
        decreaseQuantity:(state,action)=>{
            const item= state.items.find((item)=>
            item.id===action.payload);

            if(item && item.quantity>1){
                item.quantity-=1;
            }
            else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload
        );
      }
        },
         removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },
    }
})

export const{addtoCart,increaseQuantity,decreaseQuantity,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;