import React from 'react'
import './CollectionCard.css'

const CollectionCard = ({id, bagName, traits, image}) => {
    return (
        <div className='collectionCard'>
            <img src='' />
            <div className='details'></div>
            <div className='bagName'>
                {bagName} <div className='id'> #{id}</div>
            </div>
            <div className='priceContainer'>
                <img src='assets/weth.png' className='wethIcon' alt='' />
                <div className='price'>{traits[0]?.value}</div>
            </div>
        </div>
    )
}

export default CollectionCard
