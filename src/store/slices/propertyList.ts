import { createSlice } from '@reduxjs/toolkit'
import data from "../../data"

export const initialState = {
  commonList:data.results,
  savedList:[]

}

const moveItemBetweenList=(id:string,listA:{id:string}[],listB:{id:string}[])=>{
  const item= listA.find((item)=>item.id===id)
  if(item) {
    listB.push(item)
  }
  listA=listA.filter((item)=>item.id!==id)
}

const propertyListSlice = createSlice({
  name: 'propertyList',
  initialState,
  reducers: {

    moveItemFromSavedListToCommonList: (state, { payload }) => {

      const {savedList,commonList}=state
      moveItemBetweenList(payload,savedList,commonList)
    },

    moveItemFromCommonListToSavedList: (state, { payload }) => {
      const {savedList,commonList}=state
      moveItemBetweenList(payload,commonList,savedList)
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
