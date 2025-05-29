import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import Fooditem from "../Fooditem/Fooditem";
import React from "react";

const FoodDisplay = ({category}) => {
    const {food_list}=useContext(StoreContext) 

  return (
    <div className="food-display" id='food-display' >
     <h2>Top dishes near you</h2>
     <div className="food-display-list" >
{food_list.map((item,index)=>{

  if(category==='ALL'|| category===item.category){
    return(
     <Fooditem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price} ></Fooditem>
)}
})} 
</div>
    </div>
  )
}

export default FoodDisplay;