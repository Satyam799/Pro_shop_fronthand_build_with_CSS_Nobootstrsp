import { useNavigate } from "react-router-dom";
import { useGetItemsQuery } from "../../Store/cartslice";

function AdminProduct() {
  const navigate=useNavigate()
  const { data, isLoading, error } = useGetItemsQuery();
  return (
    (isLoading ? <p>...Loading</p> :<div className="Mainscreen">
      <div className="arrangignbutton">
      <div><h1>Products</h1></div> 
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
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((el) => {
             return  <tr className="tborder" key={el._id}>
                <td>{el._id}</td>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>{el.category}</td>
                <td>{el.brand}</td>
                <td><button onClick={()=>navigate(`/admin/product/${el._id}`)}>Edit</button></td>
                <td><button>Delete</button></td>

            </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>)
  );
}

export default AdminProduct;
