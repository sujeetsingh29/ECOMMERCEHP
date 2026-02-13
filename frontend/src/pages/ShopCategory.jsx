// import React from 'react'
// import "../CSS/ShopCategory.css"
// import {ShopContext} from "../context/ShopContext"
// const ShopCategory = ( props) => {
//   const {all_product}=(useContext(ShopContext))
//   return (
//     <div className='shop-category'>
//       <img src={props.banner} alt="" />
//       </div>
//   )
// }

// export default ShopCategory;

import React, { useContext } from "react";
import "../CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import drop_img from "../assets/drop_img.png";
import Item from '../component/item/Item'
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      
      <img className="shopcategory-banner" src={props.banner} alt="category banner" />
      <div className="shopcategory-index">
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by <img src={drop_img} alt=""  height="20px" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i)=>{
if(props.category === item.category){
  return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
}else{
  return null;
}
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  );
};

export default ShopCategory;
