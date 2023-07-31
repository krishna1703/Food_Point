import React from 'react'
import { CDN_LINK } from '../utils/constants'
import { addItem } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'

const ItemCard = ({fooditem}) => {

  const MenuItemsCards = fooditem;



  const { name, price, imageId, defaultPrice, description

  } = MenuItemsCards?.card?.info


  const dispatch = useDispatch();

  const handleAddItem = (fooditem) => {

    dispatch (addItem (fooditem) );


  };

// restaurent menu items cart with img

  return (

    <div>
      <hr className="   bg-gray-200 h-0.5 m-auto mt-5 mb-5 "></hr>

      <div className='flex p-1 gap-2 bg-white items-center lg:w-auto sm:w-auto 
    mx-auto m-4 justify-between   '>

        <div className='w-3/4'>
          <h4 className='font-medium  lg:text-lg sm:font-medium min-[320px]:text-sm '>{name}</h4>
          <p className='font-medium text-sm sm:font-medium min-[320px]:text-sm' >{(price || defaultPrice) / 100
          } Rs</p>

          <p className=' text-sm'>{description}</p>
        </div>

        <div className='flex flex-col gap-1'>
          <img className="w-40  border-2 rounded-lg" src={CDN_LINK + imageId} alt="food-img" />
          <button className='bg-green-400 text-white p-2 px-4 rounded-lg mt-1 '

            onClick={() => handleAddItem( fooditem )}

          > Additem</button>
        </div>

      </div>
    </div>
  )
}

export default ItemCard;