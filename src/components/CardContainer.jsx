import React from 'react'
import CardItem from './CardItem'
import { store } from '../store'

import {useSelector } from 'react-redux'

const CardContainer = () => {
const {cartItems, total, amount} = useSelector((store)=>store.cart)

if (amount < 1) {
    return <section className='cart'>
        <header>
            <h2>your bag    </h2>
            <h4 className='empty-cart'>Your bag is currently empty</h4>
        </header>
    </section>
}
  return (
    <section className='cart'>
        <header>
            <h2>your bag</h2>
            <div>
                {cartItems.map((item)=> {
                    return <CardItem key={item.id} {...item} />

                })}
            </div>
        </header>
    </section>
 
  )
}

export default CardContainer
