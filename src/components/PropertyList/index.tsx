import React from 'react';
import PropertyItem from "../PropertyItem";
import {Item} from "../../types";


type PropertyListProps = {
    list:Item[],
    attribute:string,
    clickItem:Function
}


const PropertyList = ({list, attribute, clickItem}: PropertyListProps) => {
 const showAdd=attribute==='commonList'
    return (

        <ul data-testid={`${attribute}`}>
            {list.map((item)=>{
                const {id}=item
               return <PropertyItem key={id} info={item} showAdd={showAdd} onClick={()=>clickItem(id)}/>
            })}
        </ul>
    )

}


export default PropertyList
