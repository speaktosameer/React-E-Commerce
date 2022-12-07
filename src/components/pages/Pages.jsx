import React from 'react'
import { FlashDeals } from '../flashDeals/FlashDeals'
import { Home } from '../mainpage/Home'
import { TopCate } from '../top/TopCate'
import { NewArrivals } from '../newarrivals/NewArrivals'
import { Discount } from '../discount/Discount'
import { Shop } from '../shops/Shop'
import { Annocument } from '../annocument/Annocument'
import { Wrapper } from '../wrapper/Wrapper'

export const Pages = ({productItems,cartItems,addToCart,shopItems}) => {
  return (
    <>
    <Home cardItems={cartItems}/>
    <FlashDeals productItems = {productItems} addToCart={addToCart}/>
    <TopCate/>
    <NewArrivals/>
    <Discount/>
    <Shop shopItems={shopItems} addToCart={addToCart}/>
    <Annocument/>
    <Wrapper/>

    </>
  )
}
