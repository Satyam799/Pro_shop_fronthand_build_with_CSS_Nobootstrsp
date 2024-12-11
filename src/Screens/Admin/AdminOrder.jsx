import { useGetAllordersQuery } from "../../Store/orderslice";

function AdminOrder() {
    const { data, isLoading, error } =   useGetAllordersQuery();
  return (
    (isLoading ? <p>...Loading</p> :<div className="Mainscreen">
      <div className="arrangignbutton">
      <div><h1>Orders</h1></div> 
     
      </div> 
      <div > 
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((el) => {
             return  <tr className="tborder" key={el._id}>
                <td>{el._id}</td>
                <td>{el.createdAt.split('T')[0]}</td>
                <td>{el.totalPrice}</td>
                <td>{el.isPaid ? el.paidAt.split('T')[0] : 'false'}</td>
                <td>{el.isDelivered ? el.deliveredAt.split('T')[0] : 'false'}</td>
                <td><button>Details</button></td>

            </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>)
  );
}
export default AdminOrder
