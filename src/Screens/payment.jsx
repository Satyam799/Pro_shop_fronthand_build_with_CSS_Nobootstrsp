import { useNavigate } from "react-router-dom";
import Checkoutsteps from "../Component/Checkoutsteps";

function Payment() {
  const navigate=useNavigate()
  return (
    <div className="Mainscreen">
      <div className="insidesignin">
        <div className="inside">
          <h1>Shipping</h1>

          <Checkoutsteps step1 step2/>

          <h2 className="mode">Select Method</h2>
          <div className="paypal">
            <input type="checkbox" />
            <p>PayPal or Credit Card</p>
          </div>
          <div className="butsignin">
            <button onClick={(e)=>navigate('/placeorder')}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
