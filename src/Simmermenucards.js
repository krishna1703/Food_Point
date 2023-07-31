import React from 'react'

const Simmermenucards = () => {
  return (

    <>
     
      <div className="max-w-screen-md  w-3/4 m-auto mt-52 mb-10 ">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index}>
              <div className="max-w-screen-md mt-5 h-40 text-center  gap-20  mb-10 flex justify-around shadow-lg">
                <div className="w-[40%] h-[100%] flex flex-col justify-around  p-4 shadow-sm">
                  <div className="w-[100%]    h-15 mb-5   bg-gray-300"></div>
                  <div className="w-[100%]   h-5 bg-gray-300"></div>
                  <div className="w-[80%] h-5 bg-gray-300 mb-5"></div>
                 
                </div>
                <div className="w-40 h-30  mb-5 p-10  bg-gray-300"></div>
              </div>
            </div>
          ))}
      </div>
    </>



  )
}

export default Simmermenucards;