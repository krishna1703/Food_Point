import React from 'react'

const Simmeruicards = () => {
  return (
    <>



  {/* simmerui cards */}
     <div className='flex flex-wrap mx-36 lg:mx-36 md:mx-24 sm:mx-20 min-[320px]:mx-10 m-auto  mt-12 bg-white animate-pulse'>
 
        {Array(12)
          .fill("")
          .map((e, index) => (
            <div key={index}>

              <div className='w-72 bg-gray-300 m-2 mt-10 h-auto rounded-2xl p-4  animate-pulse lg:w-72 md:w-64 sm:w-54 min-[320px]:w-60'>
                <div className='w-60 bg-slate-100 h-36 m-auto rounded-lg   animate-pulse  lg:w-60 md:w-56 sm:w-52 min-[320px]:w-48'>   </div>
                <div className='w-60 bg-slate-100 h-4 mt-10 rounded-lg   animate-pulse '></div>
                <div className='w-56 bg-slate-100 h-4 mt-4 rounded-lg   animate-pulse '></div>
                <div className='w-52 bg-slate-100 h-4  mt-4 rounded-lg  animate-pulse  '></div>

              </div>
            </div>
          ))}

          </div>
       
        </>
  )
}








export default Simmeruicards;