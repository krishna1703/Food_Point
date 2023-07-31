import React from 'react'
import { Link ,to  } from 'react-router-dom'
const EmptyCart = () => {
  return (
    <div>
    {/* empty cart img  */}

<div className=' flex   w-3/4  text-center gap-5  p-2 lg:w-3/4 sm:w-auto min-[320px]:w-auto   m-auto flex-col '>
    
    <div>
      <img src='https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png'
        className=' w-1/2  lg:w-1/2 sm:w-auto min-[320px]:w-auto    rounded-xl  m-auto  ' alt='cart-img'></img>
    </div>

    <div>
      <button className=" bg-green-500 rounded-lg  hover:bg-green-600 lg:p-4 sm-3 min-[320px]:p-2   text-base font-semibold text-white px-3 p-4">
        <Link to="/">   Check out  Food  point </Link>

      </button>
    </div>

  </div>

    </div>
  )
}

export default EmptyCart;