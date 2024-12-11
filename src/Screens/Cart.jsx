import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {  Deleteitem, prices } from "../Store/createslicecart";

function Cart() {
  const {cart}=useSelector((state)=>state.Cart)

  const [qty,setqty]=useState(cart?.qty)
  const navigate=useNavigate()
  const dispatch=useDispatch()

  function handelsubmit(){
    let price=cart.reduce((acc,crr)=>acc+crr.price*crr.qty,0)
    dispatch(prices(price))
    navigate('/shipping')
  }


  return (
    <div className="cart">
      <div className="control">
        <h1>Shopping Cart</h1>
        <div className="inlineing">
         {cart?.map((el,i)=>(
          <div className="cartinline" key={i}>
          <img className="cartimg" src={el?.image} alt="img" />
          <div className="link">
            <Link to="/product">{el?.name}</Link>
          </div>
          <p>$ {el?.price}</p>
          <select className="select" id="option" value={qty || el?.qty} onChange={(e)=>(setqty(e.target.value))}>
          {Array.from({length:el?.countInStock},(_,index)=>(
            <option value={index+1} key={index+1}>
              {index+1}
            </option>
          ))}
          </select>
          <div className="delete">
            <MdDelete size={24} cursor={'pointer'} onClick={(e)=>{
              e.preventDefault()
              dispatch(Deleteitem(el))
            }}/>
          </div>
        </div>
         )) }
        </div>
      </div>
      <div className="box2">
            <div className="SubTotal">
                <h1>SubTotal ({qty || cart.reduce((acc,crr)=>acc+crr.qty,0)}) Items</h1>
                <p>$ {(cart.reduce((acc,crr)=>acc+crr.price*crr.qty,0)).toString().padStart(0,2)}</p>
            </div>
            <div className="but1">
              <button onClick={()=>handelsubmit()}>Proceed to checkout</button>
            </div>
        </div>
    </div>
  );
}

export default Cart;
