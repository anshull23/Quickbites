import React, { useRef, useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import BrowseMenu from '../../components/BrowseMenu/BrowseMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {
  const [category,setCategory] = useState("All")

  const menuRef = useRef(null);
  
  return (
    <div>
      <Header menuRef={menuRef}/>
      <div ref={menuRef}><BrowseMenu category={category} setCategory={setCategory}/></div>
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home
