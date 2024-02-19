import React from 'react'
import ItemCard from '../../../Components/Cards/ItemCard'

const ItemCardLayout = () => {
  return (
    <div className='border-2 border-purple-500 flex flex-row gap-5'>
        <ItemCard />

        <ItemCard />
        <ItemCard />
        <ItemCard />
    </div>
  )
}

export default ItemCardLayout