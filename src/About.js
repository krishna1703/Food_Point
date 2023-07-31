import React from 'react'

// about us page
const About = () => {
  return (
    <div>

<h2 className='font-bold text-green-600 text-2xl
 mt-10 mb-10 text-center '>About <span className='text-red-500'>Us</span></h2>
    
    <div className='flex  justify-around text-center items-center mt-24 mb-28 m-auto w-3/4 lg:w-auto lg:px-5  md:w-auto md:px-4 sm:w-auto sm:px-3 min-[320px]:w-auto min-[320px]:px-2 sm:flex-row min-[320px]:flex-col '>


    <div className=' text-green-500 mt-10 w-[60%]   md:w-[60%]  sm:-[70%] min-[320px]:w-[100%]  mb-10 '>
    <h3 className='text-6xl  lg:text-5xl sm:text-3xl min-[320px]:text-2xl mb-5 font-bold font'> Welcome to <span className='text-red-400'>Food Point</span> </h3> 
    <p className='text-base lg:text-base sm:text-sm  min-[320px]:text-sm  text-black font-medium'>At Foot Point, we believe that great food and exceptional service go hand in hand. Our restaurant is a cozy and inviting 
    space where you can relax and enjoy a memorable dining experience. Whether you're joining us for a quick bite or a leisurely meal,
     our dedicated team is committed to providing you with outstanding service and delicious food.</p>
     
    </div>
 {/* burger img */}

    <div className='w-[25%]  lg:w-[25%] md:w-[35%] sm:-[40%]   min-[420px]:w-[50%] min-[320px]:w-[55%]  ' >
      <img  className='w-auto' src='https://foodfire-app.netlify.app/burger-image.ec55d069.png' alt='burger-img'></img>
    </div>
    </div>
    </div>
  )
}

export default About;