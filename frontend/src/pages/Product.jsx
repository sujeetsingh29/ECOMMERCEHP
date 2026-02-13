import React,{ useContext} from "react"; 
import {ShopContext} from "../context/ShopContext";
import {useParams} from "react-router-dom";
import BredCrums from '../component/bredCrums/BredCrums';
import ProductDisplay from "../component/productDisplay/ProductDisplay";
import Description from "../component/Description/Description";

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId} = useParams()
  const product = all_product.find((e)=> e.id === parseInt(productId))
  return (
    <div>
      <h1>product</h1>
      <BredCrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
    </div>
  )
}

export default Product