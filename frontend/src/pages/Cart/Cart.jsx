import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, token } = useContext(StoreContext);

  const [proceed, setProceed] = useState(true);

  useEffect(() => {
    if (!token) {
      setProceed(false);
    }
    else{
      setProceed(true);
    } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  const navigate = useNavigate();

  const message = () => {
    alert("Please sign in to proceed.");
  }

  return (
    <div className="cart">
      <div className="cart-items">
        <h2>Cart Items</h2>
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-details">
              <p>SubTotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:5}</p>
            </div>
            <hr />
            <div className="cart-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()+(getTotalCartAmount()===0?0:5)}</b>
            </div>
          </div>
          <button onClick={proceed ? ()=>navigate('/order') : ()=>message()}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promocode enter it here.</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
