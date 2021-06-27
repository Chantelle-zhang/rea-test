import { createSlice, current } from '@reduxjs/toolkit'
import data from "../../data"

export const initialState = {
  commonList:data.results,
  savedList:data.saved

}

const propertyListSlice = createSlice({
  name: 'propertyList',
  initialState,
  reducers: {

    moveItemFromSavedListToCommonList: (state, { payload }) => {
      const item= state.savedList.find((item)=>item.id===payload)
      if(item) {
        state.commonList.push(item)
      }
      state.savedList=state.savedList.filter((item)=>item.id!==payload)
    },

    moveItemFromCommonListToSavedList: (state, { payload }) => {
      const item= state.commonList.find((item)=>item.id===payload)
      if(item) {
        state.savedList.push(item)
      }
      state.commonList=state.commonList.filter((item)=>item.id!==payload)
    },
}
}
)
// Three actions generated from the slice
export const { moveItemFromSavedListToCommonList, moveItemFromCommonListToSavedList} = propertyListSlice.actions

// A selector
export const propertyListSelector = (state: { propertyList: any }) => state.propertyList

// The reducer
export default propertyListSlice.reducer
