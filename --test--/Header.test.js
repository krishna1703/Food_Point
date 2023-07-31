import { render } from "@testing-library/react";
import React from "react";
import Header from "../src/Header";
import { Provider } from "react-redux";
import store from "../utils/store";
import { StaticRouter } from "react-router-dom/server"

//  header  component all  testcase complete
// logo check

test("logo  should  load on rendering header ", () => {

   // load header
   const header = render(
      <StaticRouter>

         <Provider store={store} >
            <Header />
         </Provider>

      </StaticRouter>
   )


   console.log(header)

   const logo = header.getByTestId("logo")

   console.log(logo)

   expect(logo.src).toBe("https://t3.ftcdn.net/jpg/06/03/05/22/360_F_603052250_AEESz3KkbHvVoyHAmUiLCLzFZMJoyftx.jpg")




})

// online status check 



// cart items check

test("cart items ", () => {


   const header = render(
      <StaticRouter>

         <Provider store={store} >
            <Header />
         </Provider>

      </StaticRouter>
   )




   const CartItem = header.getByTestId("cart-item");
   expect(CartItem.innerHTML).toBe("<a href=\"/cart\"><span>cart: 0</span> </a>")


}) 


// login btn
test(" login btn", () => {


   const header = render(
      <StaticRouter>

         <Provider store={store} >
            <Header />
         </Provider>

      </StaticRouter>
   )




   const LoginBtn  = header.getByTestId("login-btn");

   expect(LoginBtn.innerHTML).toBe("Login")


}) 