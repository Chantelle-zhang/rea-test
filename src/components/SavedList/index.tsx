import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {moveItemFromSavedListToCommonList, propertyListSelector} from "../../store/slices/propertyList";
import PropertyList from "../PropertyList";
import {Item} from "../../types";


const SavedList=()=>{

    const {savedList}=useSelector(propertyListSelector)
    const dispatch=useDispatch()
    const clickItem=(id:Item['id'])=>{
        dispatch(moveItemFromSavedListToCommonList(id))

    }
    return <PropertyList list={savedList} attribute={'savedList'} clickItem={clickItem}/>
}

export default SavedList
