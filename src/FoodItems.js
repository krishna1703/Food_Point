import React from 'react'
import { CDN_LINK } from "../utils/constants";



const FoodItems = ({ fooditem }) => {

    return (
        <div>
            <div>

                <div className='w-72 m-6  lg:w-72 md:w-60 sm:w-60 min-[320px]:w-54 lg:m-5 md:m-4 sm:m-3 min-[320px]:m-2 border-black  hover:shadow-2xl flex-wrap  rounded-xl
                 bg-gray-200  h-auto text-black p-4 '>

{/* cart component using these type of  cart (fooditem) */}
                    <p className='font-medium text-lg p-2'>{fooditem?.card?.info?.category}</p>
                    <img className='rounded-2xl w-auto' src={CDN_LINK + fooditem?.card?.info?.imageId}></img>
<br></br>
                    <h3 className='font-semibold  w-60  text-lg'>{fooditem?.card?.info?.name}</h3>



                    <p className='text-base font-normal'>

                        Price : {(fooditem?.card?.info?.price / 100) || (fooditem?.card?.info?.defaultPrice / 100)} Rs

                    </p>
                </div>
            </div>
        </div>
    )
}

export default FoodItems;


















{/* <div className='w-52 shadow-lg shadow-slate-300 h-auto text-blue-500  p-4'>

        
              <p> {items?.card?.info?.category} </p>
              <br></br>

              <img src={CDN_LINK + items?.card?.info?.imageId}></img>

              <h3 className='font-semibold text-lg'>{items?.card?.info?.name}</h3>



              <p className='text-base font-normal'>

                Price : {(items?.card?.info?.price / 100) || (items?.card?.info?.defaultPrice / 100)} Rs

              </p>
            </div> */}