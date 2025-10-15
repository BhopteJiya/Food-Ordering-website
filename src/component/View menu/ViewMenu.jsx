import React, { useEffect, useState } from 'react';
import './ViewMenu.css';
import { menu_list } from '../../assets/assets';


const ViewMenu = () => {
 const [view,setView]=useState([]);

 useEffect(()=>{
    fetch("menu_list ")
.then(res => res.json())
 .then(data => setView(data.recipes)) // use correct variable name
 .catch(err => console.error("Error fetching recipes:", err));
  }, []); // empty array ensures it runs only once


  return (<>
   <div className="view-menu">
  <h2>ViewMenu</h2>
  <div className="recipes">
    {view.map((item) => (
      <div className="recipe-card" key={item.id}>
        <h3>{item.name}</h3>
        <p>{item.ingredients}</p>
      </div>
    ))}
  </div>
</div>

  </>
  )
}

export default ViewMenu