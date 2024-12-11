import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetusersorderQuery } from "../Store/orderslice";
import { Link, useNavigate } from "react-router-dom";
import { useUpdateuserMutation } from "../Store/userslice";
import { Userinfor } from "../Store/createsliceuser";

function Profile() {
  const dispatch=useDispatch()
  async function handelsubmit(e) {
    e.preventDefault();
    try{
    if( !password || password && confirmpassword===password){
    const user=await Updateduser({name,email,password}).unwrap()
    dispatch(Userinfor(user))
    }
    }catch(err){
      console.log(err)
    }


  }
  const navigate=useNavigate()
  const {userInfo}=useSelector((state)=>state.User)
  const {data,isLoading,error}=useGetusersorderQuery(userInfo._id)

  const [name, setname] = useState(userInfo?.name);
  const [email, setemail] = useState(userInfo?.email);
  const [password, setpassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState();
  const [Updateduser,{isLoading:loadinguser,error:updatingerror}]=useUpdateuserMutation()




  return (
    <div className="Mainscreen">
      <div className="profile">
        <div className="userprofile">
          <h1>User Profile</h1>
          <form onSubmit={handelsubmit}>
            <div className="inputstyling">
              <p>Name</p>
              <input
                className="input"
                type="text"
                placeholder="Email Address"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="inputstyling">
              <p>Email</p>
              <input
                className="input"
                type="text"
                placeholder="Password Address"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="inputstyling">
              <p>Password</p>
              <input
                className="input"
                type="Number"
                placeholder="Password Address"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
            <div className="inputstyling">
              <p>Confirm Password</p>
              <input
                className="input"
                type="text"
                placeholder="Password Address"
                value={confirmpassword}
                onChange={(e) => setconfirmpassword(e.target.value)}
              />
            </div>
            <div className="butsignin">
              <button onClick={handelsubmit}>Submit</button>
            </div>
          </form>
        </div>
        <div className=" table">
          <h1>My Orders</h1>
          <div>
            <table className="tablebuild">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Paid</th>
                <th>Delivered</th>
              </tr>
              </thead>
              <tbody >
                {data?.map((el,i)=>(
                    <tr className="tborder" key={i}>
                    <td>{el._id}</td>
                    <td>{el.createdAt.split('T')[0]}</td>
                    <td>{el.totalPrice}</td>
                    <td>{el.isPaid ? el.paidAt.split('T')[0]:'No'}</td>
                    <td>{el.isDelivered ? el.deliveredAt.split('T')[0]:'No'}</td>
                    <td><button className="but10" onClick={()=>navigate(`/orders/${el._id}`)}>Details</button></td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
