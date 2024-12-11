import { useParams } from "react-router-dom";
import {
  useGetItembyidQuery,
  useImageMutation,
  useUploadimageMutation,
} from "../../Store/cartslice";
import { useEffect, useState } from "react";

function EditProductAdmin() {
  const { id } = useParams();

  const { data, isLoading, error, refetch } = useGetItembyidQuery(id);

  const [name, setname] = useState();
  const [price, setprice] = useState();
  const [brand, setbrand] = useState();
  const [image, setimage] = useState();
  const [category, setcategory] = useState();
  const [description, setdescription] = useState();
  const [countInStock, setcountInStock] = useState();

  const [
    imageupload,
    { isLoading: uploadingtheimage, err: errorwhieluploading },
  ] = useImageMutation();

  useEffect(
    function () {
      setname(data?.name);
      setprice(data?.price);
      setbrand(data?.brand);
      setimage(data?.image);
      setcategory(data?.category);
      setdescription(data?.description);
      setcountInStock(data?.countInStock);
    },
    [data]
  );

  const [uploadimage, { isLoading: sendingimage, error: errorimage }] =
    useUploadimageMutation();
  async function handelsubmit(e) {
    e.preventDefault();
    try {
      await uploadimage({
        name,
        image,
        price,
        category,
        description,
        brand,
        countInStock,
        id,
      }).unwrap();
      refetch();
    } catch (err) {
      console.log(err);
    }
  }

  async function Imageupload(e) {
    e.preventDefault();
    const form = new FormData();
    form.append("image", e.target.files[0]);
    try{
     const data= await imageupload(form).unwrap()
     setimage(data?.image)
    }catch(err){
      console.log(err)
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
              <p>Price</p>
              <input
                className="input"
                type="text"
                placeholder="Price"
                value={price}
                onChange={(e) => setprice(e.target.value)}
              />
            </div>
            <div className="inputstyling">
              <p>Brand</p>
              <input
                className="input"
                type="text"
                placeholder="Brand"
                value={brand}
                onChange={(e) => setbrand(e.target.value)}
              />
            </div>
            <div className="inputstyling">
              <p>Image</p>
              <div>
                <input
                  className="input"
                  type="text"
                  placeholder="Image"
                  value={image}
                />
                <div className="input2">
                  <input type="file" onChange={(e)=>Imageupload(e)}/>
                </div>
              </div>
            </div>
            <div className="inputstyling">
              <p>Category</p>
              <input
                className="input"
                type="text"
                placeholder="Category"
                value={category}
                onChange={(e) => setcategory(e.target.value)}
              />
            </div>
            <div className="inputstyling">
              <p>CountInStock</p>
              <input
                className="input"
                type="text"
                placeholder="CountInStock"
                value={countInStock}
                onChange={(e) => setcountInStock(e.target.value)}
              />
            </div>
            <div className="inputstyling">
              <p>Description</p>
              <input
                className="input"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
            </div>
            <div className="butsignin">
              <button onClick={handelsubmit}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProductAdmin;
