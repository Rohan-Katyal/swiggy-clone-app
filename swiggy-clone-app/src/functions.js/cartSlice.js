import { createSlice} from "@reduxjs/toolkit";

// creating cartSlice
const cartSlice = createSlice({
    
    // name of the slice
    name : 'cart',

    // setting up the initial state of the slice
    initialState : {
        // items list initialising
        items : [],
    },

    // defining Reducer functions 
    reducers : {
        addItem : (state, action)=>{
            console.log(`Item added !! `);
            console.log(action);
            state.items.push(action.payload);
        },
        removeItem : (state, action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            return {items:[]};
        }
    }
});

export const {
    addItem, 
    removeItem, 
    clearCart   } = cartSlice.actions;


export default cartSlice.reducer;


// Reducer functions are used to apply some logic and perform changes,
// in a reducer state according to the logic, it can be creation, updation or deletion
// Reducer function are the building blocks of the redux store slices,
// it allows us to update the slices accordingly, depending upon the logic and functionality.