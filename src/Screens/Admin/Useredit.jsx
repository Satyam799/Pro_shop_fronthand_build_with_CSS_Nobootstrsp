import { useState } from "react";
import { useSelector } from "react-redux";

function Useredit() {

  const {userInfo}=useSelector(state=>state.User)  

  const [email, setemail] = useState(userInfo.email);
  const [name, setname] = useState(userInfo.name);
  const [admin,setadmin]=useState(userInfo.isAdmin)
  function handelsubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="Mainscreen">
      <div className="insidesignin">
        <div className="inside">
          <h1>Edit Product</h1>
          <form onSubmit={handelsubmit}>
          <div className="inputstyling">
              <p>Name</p>
              <input
                className="input"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>


            <div className="inputstyling">
              <p>Email Address</p>
              <input
                className="input"
                type="text"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            
            <div className="inputstyling3">
              <input type="checkbox"  value={admin} onChange={(e)=>setadmin(e.target.value)}/>
              <label>isAdmin</label>

            </div>
            <div className="butsignin">
              <button>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Useredit;
