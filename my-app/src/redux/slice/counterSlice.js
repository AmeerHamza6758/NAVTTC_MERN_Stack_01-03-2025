import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    name: "Ameer Hamza"
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremet: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 }
    }
})
export const { incremet, decrement } = counterSlice.actions
export default counterSlice.reducer