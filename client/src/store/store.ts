import { configureStore } from "@reduxjs/toolkit"
import storereducer from "./storereducer"

const store = configureStore({
    reducer: storereducer
})

export default store