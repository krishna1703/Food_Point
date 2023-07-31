import React, { Suspense } from "react";
import { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import Footer from "./src/Footer";
import Error from "./src/Error";
import Cart from "./src/Cart";
import { Provider } from "react-redux";
import RestaurentMenu from "./src/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import store from "./utils/store";

const About = lazy(() => import("./src/About"))




const AppLayout = () => {
  return (
    <Provider  store = {store}>
     
        <div>
          <Header />
          <Outlet />
        </div>
        <div >
          <Footer />
        </div>
 
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body></Body>
      },

      {
        path: "/About",
        element: <Suspense fallback={<h5>loading.....</h5>}>
          <About />

        </Suspense>
      },

     
      
      {
        path: "/Cart",
        element: <Cart />
      },
      {
        path: "/restaurents/:resId/",
        element: <RestaurentMenu />
      }
    ],
    errorElement: <Error />,
  },

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
