import { createSlice } from "@reduxjs/toolkit";
export interface parseddata {
    value: string,
    isuser: boolean
}
const initialState: parseddata[] = [{ value: "", isuser: false }];

const storereducer = createSlice({
    name: "storereducer",
    initialState,
    reducers: {
        add: (state, action) => {
            state.push({ value: action.payload.value, isuser: action.payload.isuser ? true : false })
        }
    }
})

export const { add } = storereducer.actions

export default storereducer.reducer