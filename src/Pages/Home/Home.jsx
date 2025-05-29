import React from 'react'
import "./Home.css"
import Header from '../../Header/Header'
import ExloreMenu from '../../component/ExploreMenu/ExloreMenu'
import { useState } from 'react'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import AppDownload from '../../component/AppDownload/AppDownload'

const Home = () => {
  const[category,setCategory]=useState("All");
  return (
    <div >
        <Header></Header>
        <ExloreMenu category={category} setCategory={setCategory}></ExloreMenu>
        <FoodDisplay category={category} ></FoodDisplay>
        <AppDownload></AppDownload>
    </div>
  )
}

export default Home