import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Checkoutsteps from "../Component/Checkoutsteps"
import { useDispatch } from "react-redux"
import { Address } from "../Store/createslicecart"

function Shipping() {

    const [address,setaddress]=useState()
    const [city,setcity]=useState()
    const [postalCode,setpostalCode]=useState()
    const [country,setcountry]=useState()
    const naviagte=useNavigate()
    const dispatch=useDispatch()
    function handelsubmit(e){
      e.preventDefault()
      if(!address ||!city ||!postalCode ||!country ) return 
      dispatch(Address({address,city,postalCode,country}))
      naviagte('/payment')
    }

    return (
        <div className="Mainscreen">
        <div className="insidesignin">
          <div className="inside">
          <Checkoutsteps step1/>
   
          <h1>Shipping</h1>
          <form onSubmit={handelsubmit}>
          <div className="inputstyling">
            <p>Address</p>
            <input className="input" type="text" placeholder="Email Address" value={address} onChange={(e)=>setaddress(e.target.value)}/>
          </div>
          <div className="inputstyling">
            <p>city</p>
            <input className="input" type="text" placeholder="Password Address" value={city} onChange={(e)=>setcity(e.target.value)} />
          </div>
          <div className="inputstyling">
            <p>postalCode</p>
            <input className="input" type="Number" placeholder="Password Address" value={postalCode} onChange={(e)=>setpostalCode(e.target.value)} />
          </div>
          <div className="inputstyling">
            <p>country</p>
            <input className="input" type="text" placeholder="Password Address" value={country} onChange={(e)=>setcountry(e.target.value)} />
          </div>
          <div className="butsignin"> 
            <button onClick={handelsubmit}>Submit</button>
          </div>
          </form>
          
          </div>
        </div>
      </div>
    )
}

export default Shipping
