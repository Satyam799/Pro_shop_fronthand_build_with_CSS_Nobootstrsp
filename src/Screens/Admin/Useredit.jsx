import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  useUpdatetheuserMutation,
  useUseridQuery,
} from "../../Store/userslice";
import { Userinfor } from "../../Store/createsliceuser";

function Useredit() {
  const [Updateid, { isLoading: userupdate, error: usererrorr }] =useUpdatetheuserMutation();
  const { id } = useParams();
  const dispatch=useDispatch()
  const {userInfo}=useSelector(state=>state.User)
  const { data, isLoading, error, refetch } = useUseridQuery(id);

  useEffect(function(){
    setemail(data?.email)
    setname(data?.name)
    setadmin(data?.isAdmin)
  },[data])


  const [email, setemail] = useState();
  const [name, setname] = useState();
  const [admin, setadmin] = useState();
  async function handelsubmit(e) {
    e.preventDefault();
    try {
      const data=await Updateid({ name, email, isAdmin: admin, id }).unwrap();
      if(userInfo._id===data._id){
        dispatch(Userinfor(data))
      }
      refetch();
    } catch (err) {
      console.log(err);
    }
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
              <input
                type="checkbox"
                checked={admin}
                onChange={(e) => setadmin(e.target.checked)}
              />
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
