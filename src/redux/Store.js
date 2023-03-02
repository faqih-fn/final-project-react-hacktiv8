import {configureStore} from "@reduxjs/toolkit"
import filmReducer from "./Slicing"

const store = configureStore({
    reducer: {
        films: filmReducer
    }
})

export default store