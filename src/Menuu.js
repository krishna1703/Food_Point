import React from 'react'
import { useState } from "react";
import ItemCard from './ItemCard';
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { IconContext } from "react-icons";


const Menuu = ({menu}) => {


  
  const MenuitemsCards = menu?.card?.card?.itemCards;

  

//  console.log(menu)
  const [isVisible, setIsVisible] = useState("false");

// menu section 

  return (
    <>
      <div className='m-auto p-2 w-3/4 sm:w-3/4 sm:m-auto min-[450px]:w-auto min-[450px]:m-auto min-[320px]:w-auto min-[320px]:mx-2'>

       

        <div className=' bg-gray-100 flex items-center 
         text-center justify-between m-auto  mt-3 px-5   sm:px-5 min-[320px]:px-1 '>
       
          <h3 className='font-medium text-xl px-5    sm:text-xl  min-[320px]:text-base text-green-600'>{menu?.card?.card?.title} 
          
          <span className='font-medium text-xl px-1 sm:text-xl  min-[320px]:text-sm ' >  {menu?.card?.card?.itemCards?.length} </span>
          
           </h3>
           {/* drop down an up button  */}

     
          {MenuitemsCards && isVisible == "true" && (
            <button className='p-4' onClick={()=> setIsVisible("false")}>
            <IconContext.Provider value={{ size: "1.5em" }}>
                <div className="mr-2">
                  <BsCaretDown />
                </div>
              </IconContext.Provider>
           
            </button>
          )}

          {MenuitemsCards  && isVisible == "false" && (
            <button   className='p-4' onClick={()=> setIsVisible("true")}>
            
            <IconContext.Provider value={{ size: "1.5em" }}>
                <div className="mr-2">
                  <BsCaretUp />
                </div>
              </IconContext.Provider>
            </button>
          )} 
       

        </div>


          { isVisible == "false" &&

          MenuitemsCards?.map((menuitem,index) => {

          key={index}

              return (
                <>
               
                <ItemCard fooditem={menuitem} ></ItemCard>

                
                </>
              )
              {/* all items of retaurent  */}
            })
          }
       


      </div>


    </>
  )
}

export default Menuu;


 