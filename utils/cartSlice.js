import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",

    initialState: {
        items: [  ]
    },

    reducers : {
        addItem: (state , action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.pop(action.payload)
        },

        ClearCart: (state) => {
            state.items = []
        },
    }


// cart section using redux toolkit 

})

export const { addItem , removeItem , ClearCart } = cartSlice.actions;
export default cartSlice.reducer;