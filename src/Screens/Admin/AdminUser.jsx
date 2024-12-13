import { useNavigate } from "react-router-dom";
import { useGetAllUsersQuery } from "../../Store/userslice";

function AdminUser() {
    const { data, isLoading, error,refetch } = useGetAllUsersQuery();
    const navigate=useNavigate()

    
    
    
    return (
      (isLoading ? <p>...Loading</p> :<div className="Mainscreen">
        <div className="arrangignbutton">
        <div><h1>Users</h1></div> 
        <div className="createbut">
          <button>Create Product</button>  
        </div> 
        </div> 
        <div > 
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>Email</th>
                <th>isAdmin</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((el) => {
               return  <tr className="tborder" key={el._id}>
                  <td>{el._id}</td>
                  <td>{el.name}</td>
                  <td>{el.email}</td>
                  <td>{el.isAdmin ? 'True':'False'}</td>
                  <td><button onClick={(e)=>navigate(`/admin/user/${el._id}`)}>Edit</button></td>
                  <td><button>Delete</button></td>
  
              </tr>;
              })}
            </tbody>
          </table>
        </div>
      </div>)
    );
  }

export default AdminUser
