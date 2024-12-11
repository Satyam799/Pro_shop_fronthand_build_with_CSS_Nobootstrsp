import { useDispatch, useSelector } from "react-redux";
import Checkoutsteps from "../Component/Checkoutsteps";
import { Link, useNavigate } from "react-router-dom";
import { useGetOrderMutation } from "../Store/orderslice";
import { Clearcart } from "../Store/createslicecart";

function PlaceOrder() {
  const cart = useSelector((state) => state.Cart);
  const [createorder,isLoading,error]=useGetOrderMutation()
  const navigate=useNavigate()
  const dispatch=useDispatch()
  async function handelsubmit(e){
    e.preventDefault()
    try{
    const data=await createorder(
      {
        cartItem:cart.cart,
        shippingAddress:cart.shippingAddress,
        paymetMethod: cart.paymetMethod,
        totalproice: cart.totalproice,
        itemprice:cart.itemprice,
        shippingprice:cart.shippingprice,
        taxprice:cart.taxprice,
      }
    ).unwrap()
    dispatch(Clearcart())
    navigate(`/orders/${data._id}`)

    }catch(err){
      console.log(err)
    }

  }


  return (
    <div className="placeorder">
      <div className="extraoncheckout">
        <Checkoutsteps step1 step2 step3 step4/>
        </div>
        <div className="listingplaceholder">
            <div className="adjustment">
            <h1>Shipping</h1>
            <p><strong>Address</strong>:{cart?.shippingAddress?.address}</p>
            </div>
            <div className="adjustment">
            <p><strong>Payment Method</strong>:{cart?.paymetMethod}</p>
            </div>

            {cart?.cart?.map((el,i)=>(
          <div className="cartinline2" key={i}>
         <div className="link5">

          <img className="cartimg2" src={el?.image} alt="img" />
            <Link to="/product">{el?.name}</Link>
          </div>
          <p>{el.qty} * ${el?.price}=${(el?.price*el?.qty).toFixed(2)}</p>
          
       
        </div>
         )) }
        </div>

      <div className="box3">
        <div className="h1">
          <h1>Order Summary</h1>
        </div>
        <div className="indsidebox">
          <p>Items:</p>
          <p>${cart?.itemprice}</p>
        </div>

        <div className="indsidebox">
          <p>Tax:</p>
          <p>${cart?.taxprice?.toFixed(2)}</p>
        </div>
        <div className="indsidebox">
          <p>ShippingPrice:</p>
          <p>${cart?.shippingprice?.toFixed(2)}</p>
        </div>
        <div className="indsidebox">
          <p>TotalPrice:</p>
          <p>${ cart?.totalproice?.toFixed(2)}</p>
        </div>
        <div className="indsidebox"></div>
        <div className="indsideboxbut">
          <button onClick={handelsubmit}>Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
