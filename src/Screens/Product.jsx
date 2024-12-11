import { useNavigate, useParams } from "react-router-dom";
import Rating from "../Component/Rating";
import { useGetItembyidQuery } from "../Store/cartslice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Cartadding } from "../Store/createslicecart";
import Loader from "../Component/Loader";

function Product() {
  const id = useParams().id;
  const { data, isLoading, error } = useGetItembyidQuery(id);
  console.log(data)
  const [qty, setqty] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handelcart() {
    dispatch(Cartadding({ ...data, qty: +qty }));
    navigate("/cart");
  }

  return (isLoading ? (
    <Loader />
  ) : (
    <div className="Mainscreen">
      <div>
        <div className="product">
          <div className="but">
            <button onClick={() => navigate("/")}>Go Back</button>
          </div>
          <div>
            <img className="image" src={data?.image} alt="Image" />
          </div>
          <div className="headerpadding">
            <h3 className="extra">{data?.name}</h3>
            <div className="extra2">
              <Rating
                value={data?.rating}
                text={`${data?.numReviews} reviews`}
              />
            </div>
            <p className="extra2">Price ${data?.price}</p>
            <p className="extra4">{data?.description}</p>
          </div>
          <div className="box">
            <div className="apart">
              <p>Price</p>
              <p>$ {data?.price}</p>
            </div>
            <div className="apart">
              <p>Status</p>
              <p className="bold">
                {data?.countInStock > 0 ? "In Stock" : "Out Of Stock"}
              </p>
            </div>
            {data?.countInStock ? (
              <div className="apart">
                <label>Qty</label>
                <select
                  className="select"
                  id="option"
                  onChange={(e) => setqty(e.target.value)}
                >
                  {Array.from(
                    { length: data?.countInStock || 0 },
                    (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    )
                  )}
                </select>
              </div>
            ) : (
              ""
            )}
            <div className="but1">
              <button onClick={handelcart}>Add Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
}

export default Product;
