import { Link } from "react-router-dom"

function Checkoutsteps({step1,step2,step3,step4}) {
    return (
        <div className="selectedone">
            {step1 ? <Link to={'/login'}>Login</Link>:<p className="notactive">Login</p>}
            {step2 ? <Link to={'/shipping'}>Shipping</Link>:<p className="notactive">Shipping</p>}
            {step3 ? <Link to={'/payment'}>Payment</Link>:<p className="notactive">Payment</p>}
            {step4 ? <Link to={'#'}>PlaceOrder</Link>:<p className="notactive">PlaceOrder</p>}

        </div>
    )
}

export default Checkoutsteps
