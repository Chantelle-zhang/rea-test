import {createSlice} from '@reduxjs/toolkit'
import data from "../../data"

export const initialState = {
    commonList: data.results,
    savedList: data.saved

}

const propertyListSlice = createSlice({
        name: 'propertyList',
        initialState,
        reducers: {

            removeItemFromSavedList: (state, {payload}) => {
                const item = state.savedList.find((item) => item.id === payload)
                if (item) {
                    state.savedList = state.savedList.filter((item) => item.id !== payload)
                }

            },

            addItemToSavedList: (state, {payload}) => {
                const item = state.commonList.find((item) => item.id === payload)
                if (item) {
                    const itemExistedInSavedList = state.savedList.find((item) => item.id === payload)
                    if (!itemExistedInSavedList) {
                        state.savedList.push(item)
                    }
                }
            },
        }
    }
)
// Three actions generated from the slice
export const {removeItemFromSavedList, addItemToSavedList} = propertyListSlice.actions

// A selector
export const propertyListSelector = (state: { propertyList: any }) => state.propertyList

// The reducer
export default propertyListSlice.reducer
