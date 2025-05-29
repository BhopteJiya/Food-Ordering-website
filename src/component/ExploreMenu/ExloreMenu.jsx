import "./ExploreMenu.css";
import React from 'react';
import { menu_list } from "../../assets/assets";


const ExloreMenu = ({category,setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu" >
    <h1>Explore our menu</h1>
    <p className="Explore-menu-text" >Choose from a diverse menu featuring a delicious food. Whether someone is looking for a hearty meal, a light and healthy option, or a delicious dessert, a thoughtfully curated menu ensures there is something for everyone.  </p>
    <div className="Explore-menu-list" >
      {menu_list.map((item,index)=>{
        return(
          <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}
         key={index }className="explore-menu-list-item" >
              <img className={category===item.menu_name?"active":""}   src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default ExloreMenu