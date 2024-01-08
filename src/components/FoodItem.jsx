import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";

const FoodItem = () => {
  const handleTost = () => toast.success("Item add to Cart");

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="mx-7 flex flex-wrap gap-10 justify-center ">
        {FoodData.map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handleTost={handleTost}
            />
          );
        })}
      </div>
    </>
  );
};

export default FoodItem;
