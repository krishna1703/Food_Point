import React from "react";




const RestaurentCard = (props) => {
  const { resData } = props;
  const {  cloudinaryImageId, cuisines, name, avgRating, sla, costForTwo} =
    resData;

    
 
  return (
    <div className="w-80 m-3 h-auto bg-gray-100 mb-10  mt-10 rounded-3xl shadow-2xl p-6  flex flex-col hover:bg-gray-100  shadow-slate-300 ">
     
     

          <div>
            <img
              className="w-80    h-64 rounded-lg "
              alt="res-img"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/"+ 
                cloudinaryImageId
              }
              

            />
       
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
