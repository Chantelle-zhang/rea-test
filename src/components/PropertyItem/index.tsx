import React, {MouseEventHandler, useState} from 'react';

import styles from './PropertyItem.module.css';
import {Item} from "../../types";

type PropertyItemProps = {
    info: Item
    showAdd: boolean,
    onClick: MouseEventHandler
}


const PropertyItem = ({info, showAdd, onClick}: PropertyItemProps) => {

    const [showBanner, setShowBanner] = useState(false)
    const {
        price,
        agency: {
            brandingColors: {
                primary
            },
            logo,
        },
        id,
        mainImage
    } = info
    const {greenBanner, redBanner, baseBanner, item, top, mainImageStyle, show, hide} = styles
    const bannerClass = `${showBanner ? show : hide} ${showAdd ? greenBanner : redBanner} ${baseBanner}`
    const exposeBanner = () => {
        setShowBanner(true)
    }

    const hideBanner = () => {
        setShowBanner(false)
    }

    return (

        <li className={item} onMouseOver={exposeBanner} onMouseLeave={hideBanner} data-testid={id}>
            <div className={top} style={{backgroundColor: primary}}><img src={logo}/></div>
            <img src={mainImage} className={mainImageStyle}/>
            <p>{price}</p>
            <div className={bannerClass} onClick={onClick} data-testid='item'>
                {
                    showAdd ? 'Add Property' : 'Remove Property'
                }
            </div>
        </li>
    )
}


export default PropertyItem
