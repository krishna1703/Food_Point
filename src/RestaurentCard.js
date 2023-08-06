import React from "react";
import { CDN_LINK } from "../utils/constants";


const RestaurentCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, cuisines, name, avgRating, sla, costForTwo} =
    resData;
// restaurent card

  return (
    <div className="w-72 m-3 bg-gray-50 mb-10 rounded-3xl shadow-2xl p-6  hover:bg-gray-100  shadow-slate-300 ">
      <div>

          <div className="w-64" >
            <img
              className="w-60 rounded-lg "
              alt="res-img"
              src={
                CDN_LINK +
                cloudinaryImageId

              }

            />
          </div>
        </div>

        <div className="w-72 ">
          <p className=" font-semibold mt-4 ">{name}</p>

          <p className="text-slate-600 ">{cuisines.slice(0, 3).join(" ,")}</p>

        </div>

        <div className="flex justify-between text-center items-center mt-3 text-slate-600 mb-3">

          <p className=" px-1 text-white  bg-green-600">⭐{avgRating} </p>
          <p className="p-1">{sla?.deliveryTime}min</p>
          <p className="p-1" >{costForTwo }</p>
        </div>
      </div>
    
  );
};

export default RestaurentCard;
