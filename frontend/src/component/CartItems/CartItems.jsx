// import React, { useContext } from "react";
// import "./Cartitems.css";
// import { ShopContext } from "../../context/ShopContext";
// import remove_icon from "../../assets/remove.webp";

// const CartItems = () => {
//   const {  getTotalCartAmount, cartItems, removeFromCart } = useContext(ShopContext);

//   return (
//     <div className="cartitems">
//       <div className="cartitems-format-main">
//         <p>Products</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//       </div>
//       <hr />

//       {all_product.some((item) => cartItems[item.id] > 0) ? (
//         all_product.map((item) => {
//           if (cartItems[item.id] > 0) {
//             return (
//               <div key={item.id}>
//                 <div className="cartitems-format cartitems-format-main">
//                   <img src={item.image} alt="" className="carticon-product-icon" />
//                   <p>{item.name}</p>
//                   <p>${item.new_price}</p>
//                   <button className="cartitems-quantity">
//                     {cartItems[item.id]}
//                   </button>
//                   <p>${item.new_price * cartItems[item.id]}</p>
//                   <img
//                     className="cartitems-remove-icon"
//                     src={remove_icon}
//                     onClick={() => removeFromCart(item.id)}
//                     alt="remove"
//                   />
//                 </div>
//                 <hr />
//               </div>
//             );
//           }
//           return null;
//         })
//       ) : (
//         <h2>Your cart is empty</h2>
//       )}
//     </div>
//   );
// };

// export default CartItems;

import React, { useContext } from 'react'
import "./Cartitems.css"
import remove_icon from "../../assets/remove.webp"
import { ShopContext } from '../../context/ShopContext'
const CartItems = () => {
    const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className='cartitems-format cartitems-format-main'>
                            <img src={e.image} alt="" height="100px" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>
                                {cartItems[e.id]}
                            </button>
                            <p>{e.new_price*cartItems[e.id]}</p>
                            <img src={remove_icon} alt="" onClick={()=> removeFromCart(e.id)} height="20px"/>
                        </div>
                        <hr/>
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type='text' placeholder='promo code'/>
                        <button>submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
