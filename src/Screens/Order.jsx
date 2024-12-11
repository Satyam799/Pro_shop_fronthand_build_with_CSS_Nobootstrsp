import { Link, useParams } from "react-router-dom";
import { useGetorderbyidQuery, useOrderDeliveredMutation, usePayorderMutation } from "../Store/orderslice";
import Message from "../Component/Message";

function Order() {
  const { id } = useParams();
  const { data, isLoading, error,refetch } = useGetorderbyidQuery(id);
  const user = JSON.parse(localStorage.getItem("UserInfo"));
  const [payorder,{isLoading:paymentloader,error:paymenterror}]=usePayorderMutation()
  const [deliverorder,{isLoading:deliverorser,error:delivererror}]=useOrderDeliveredMutation()

  console.log(data)
  
  async function isDeleivered (e) {
    e.preventDefault()
    try{
     await deliverorder(id).unwrap()
     refetch()
    }catch(err){
      console.log(err)
    }
  }


  async function handelpayment(e){
     e.preventDefault()
     try{
       await payorder(id,{...data,isPaid:true}).unwrap()
       refetch()
     }catch(err){
       console.log(err)
     }
   }



  return (
    <div className="placeorder">
      <div className="extraoncheckout">
        <h1>
          {" "}
          <strong>order</strong> {id}
        </h1>
      </div>

      <div className="listingplaceholder">
        <div className="adjustment2">
          <h1>Shipping</h1>
          <p>
            <strong>Name</strong>:{user?.name}
          </p>
          <p>
            <strong>Email</strong>:{user?.email}
          </p>
          <p>
            <strong>Address</strong>:{data?.shippingAddress?.country}
          </p>
         {data?.isDelivered ? <p>Delivered at  : {data?.deliveredAt}</p>  : <Message>Your product is not delevired yet.</Message>}
        </div>
        <div className="adjustment2">
          <h1>Payment Method</h1>
          <p>
            <strong>Method:</strong> {data?.paymentMethod}
          </p>
          {data?.isPaid ? <p>Paied at : {data?.paidAt}</p>  :<Message>Not Payed.</Message>}
        </div>
        <div className="adjustment new">
          {data?.orderItem?.map((el, i) => (
            <div className="cartinline4" key={i}>
              <div className="link5">
                <img className="cartimg2" src={el?.image} alt="img" />
                <Link to="/product">{el?.name}</Link>
              </div>
              <p>
                {el.qty} * ${el?.price}=${(el?.price * el?.qty).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="box3">
        <div className="h1">
          <h1>Order Summary</h1>
        </div>
        <div className="indsidebox new2">
          <div className="arrangement5">
            <p>Items:</p>
            <p>${data?.itemsPrice}</p>
            </div>
            <div className="arrangement5">
            <p>Tax:</p>
            <p>${data?.taxPrice}</p>
            </div>
            <div className="arrangement5">
            <p>ShippingPrice:</p>
            <p>${data?.shippingPrice}</p>
            </div>
            <div className="arrangement5">
            <p>TotalPrice:</p>
            <p>${data?.totalPrice}</p>
            </div>
          <p></p>
        </div>
        {!data?.isPaid && <div className="indsidebox">
          <button onClick={handelpayment}>Test pay Order</button>
        </div>  }      
        {!data?.isDelivered && <div className="indsideboxbut">
          <button onClick={isDeleivered}>Mark as delivered</button>
        </div>}
      </div>
    </div>
  );
}

export default Order;
