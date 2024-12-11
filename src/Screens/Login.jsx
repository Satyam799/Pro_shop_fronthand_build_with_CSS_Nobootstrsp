import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSigninuserMutation } from "../Store/userslice";
import { useDispatch } from "react-redux";
import { Userinfor } from "../Store/createsliceuser";
import Checkoutsteps from "../Component/Checkoutsteps";

function Login() {

    const dispatch=useDispatch()
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const navigate=useNavigate()
    const [user,isLoading,error]=useSigninuserMutation()

    async function handelsubmit(e){
        e.preventDefault()
        try{
        const userinfor=await user({email,password}).unwrap()
        dispatch(Userinfor(userinfor))
        
        navigate('/')
        }catch(err){
            console.log(err)
        }
    }


  return (
    <div className="Mainscreen">
      <div className="insidesignin">
        <div className="inside">
        <h1>Sign In</h1>
        <form onSubmit={handelsubmit}>
        <div className="inputstyling">
          <p>Email Address</p>
          <input className="input" type="text" placeholder="Email Address" value={email} onChange={(e)=>setemail(e.target.value)}/>
        </div>
        <div className="inputstyling">
          <p>Password Address</p>
          <input className="input" type="password" placeholder="Password Address" value={password} onChange={(e)=>setpassword(e.target.value)} />
        </div>
        <div className="butsignin"> 
          <button>Sign In</button>
        </div>
        </form>
        <div className="newcustomaer">
          <p>New Customer ?</p>
          <Link to={"#"}> Register</Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
