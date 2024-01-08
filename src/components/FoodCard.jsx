import React from "react";
import { FaStar } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, rating, desc, img, handleToast }) => {
  const dispatch = useDispatch();
  return (
    <div className="font-bold w-64 bg-white p-5 flex flex-col rounded-lg mt-10 ">
      <img
        className="w-auto h-32 hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
        src={img}
        alt=""
      />

      <div className="flex justify-between my-4">
        <h2>{name}</h2>
        <span>${price}</span>
      </div>
      <p className="font-medium text-gray-500 leading-none ">
        {desc.slice(0, 50)}
      </p>
      <div className="flex justify-between mt-5 ">
        <span className="flex items-center gap-1">
          <FaStar className="text-yellow-400" /> {rating}
        </span>
        <button
          onClick={() =>
            dispatch(addToCart({ id, name, img, price, rating, qty: 1 }))
          }
          className="py-1 px-2 text-white bg-green-500 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
