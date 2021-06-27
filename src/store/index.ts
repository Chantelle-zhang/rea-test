import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./slices";


type state={
    propertyList:{
        commonList:{}[],
        savedList:{}[]
    }
}


const store = configureStore({ reducer: rootReducer })

export default store
