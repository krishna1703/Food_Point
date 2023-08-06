import React from "react";
import { LOGO_LINK } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"




const Header = () => {

  const [login, Setlogin] = useState("Login")



  const cartItem = useSelector(store => store.cart.items);
  //  console.log(cartItem)

  return (
    <div className="flex sticky z-50 top-0  justify-between bg-white  text-black text-base    lg:justify-between 
    md:justify-between  md:flex-wrap sm:flex-wrap md:items-center sm:justify-center min-[425px]:flex-wrap min-[425px]:justify-center  min-[375px]:justify-center
    min-[375px]:flex-wrap  min-[320px]:flex-wrap  min-[320px]:justify-center

    shadow-lg  mb-4 text-center   items-center">
      <div >
        {/* logo  */}
        <Link to="/"> <img data-testid=" logo " className="h-16 mx-28     cursor-pointer" src={LOGO_LINK} /></Link>

      </div>

      <div >
        <ul className="flex   gap-7 
        
// ui elements
         items-center px-10 lg:gap-10  lg:px-5  min-[425px]:px-4 min-[375px]:py-1    min-[320px]:gap-4  ">



          <li className=" hover:text-red-400  ">
            <Link to="/"> Home</Link>
          </li>

          <li className="  hover:text-red-400 " >
            <Link to="/about">About</Link>
          </li>


          {/* cart  */}

          <li className="  hover:text-red-400 " data-testid="cart-item" >
            <Link to="/cart">
              <span>cart: {cartItem.length}</span> </Link>
          </li>


          <button className=" p-2  bg-green-500  lg:p-2  lg:px-4 rounded-md text-white "

            data-testid="login-btn" onClick={() => {

              login == "Login" ? Setlogin("Logout") : Setlogin("Login")

            }}>{login}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
