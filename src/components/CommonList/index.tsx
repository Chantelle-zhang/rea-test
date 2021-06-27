import React from "react";
import PropertyList from "../PropertyList";
import {useDispatch, useSelector} from "react-redux";
import {moveItemFromCommonListToSavedList, propertyListSelector} from "../../store/slices/propertyList";
import {Item} from "../../types";



const CommonList=()=>{

    const {commonList}=useSelector(propertyListSelector)
    console.log(commonList,'commonList')
    const dispatch=useDispatch()
    const clickItem=(id:Item['id'])=>{
        dispatch( moveItemFromCommonListToSavedList(id))
    }
    return <PropertyList list={commonList} attribute={'commonList'} clickItem={clickItem}/>
}

export default CommonList
