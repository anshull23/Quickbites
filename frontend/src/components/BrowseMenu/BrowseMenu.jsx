import React from "react";
import "./BrowseMenu.css";
import { menu_list } from "../../assets/assets";

const BrowseMenu = ({category,setCategory}) => {
  return (
    <div className="browse-menu app" id="browse-menu">
      <h1>Discover Our Delights</h1>
      <p className="browse-menu-text">
        Discover a diverse menu with an exquisite selection of dishes made from
        premium ingredients and culinary mastery. Our aim is to fulfill your
        cravings and elevate your dining pleasure, one delectable meal at a
        time.
      </p>
      <div className="browse-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="browse-menu-list-items">
                    <img className={category===item.menu_name?"select":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  );
};

export default BrowseMenu;
