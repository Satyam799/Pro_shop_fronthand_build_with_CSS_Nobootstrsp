import { useRef, useState } from "react";
import image from "../../public/images/logo.png";
import { FaShoppingCart, FaUser, FaAlignJustify } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLogginguseroutMutation } from "../Store/userslice";
import { Clearuserinfo } from "../Store/createsliceuser";
import { useSearchproductQuery } from "../Store/cartslice";

function Header() {
  const navigate = useNavigate();
  const [collapse, setcollapse] = useState(false);
  const [colors, setcolors] = useState(true);
  const [dropdown,setdropdown]=useState(true)
  const [dropdown2,setdropdown2]=useState(true)
  const [search,setsearch]=useState()
  const { userInfo } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const value1 = useRef(null);
  const value2 = useRef(null);
  const [logout, isLoading, error] = useLogginguseroutMutation();


  function handelfocuse(value) {
    value.current.focus();
    if(search){
      navigate(`/search/${search}`)
    }
  }


 



  return (
    <div>
      <div className={`header`}>
        <div className="innerheader">
          <div className="logo" onClick={() => navigate("/")}>
            <img src={image} alt="logo" />
            <p>ProShop</p>
          </div>
          <div className={`headerin `}>
            <form className="search" onSubmit={handelfocuse}>
              <input
                className="searchin"
                type="text"
                ref={value1}
                placeholder="Search Product..."
                onChange={(e)=>setsearch(e.target.value)}
              />
              <button onClick={() =>{
                handelfocuse(value1)}} className="butser">
                Search
              </button>
            </form>

            <div className="collesablelogo">
              <FaAlignJustify
                size={15}
                color="white"
                onClick={() => setcollapse(!collapse)}
              />
            </div>
            <div
              className="hedingfull nav-icon "
              onClick={() => navigate("/cart")}
            >
              <FaShoppingCart size={15} />

              <p>Cart</p>
            </div>
            <div>
              <div className="nav-icon hedingfull">
                {userInfo ? (
                  <div className="main2" onClick={()=>{
                      setdropdown(!dropdown)
                      setdropdown2(true)
                      }}>
                    <p className="toggle ">{userInfo.name}</p>
                    <div className={`dropdown ${dropdown ? 'hide' :''} `}>
                      <button onClick={() => navigate("/profile")}>
                        Profile
                      </button>
                      <button
                        onClick={async () => {
                          await logout().unwrap();
                          dispatch(Clearuserinfo());
                          navigate("/");
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="hedingfull nav-icon "
                    onClick={() => navigate("/login")}
                  >
                    <FaUser size={15} />
                    <p>Sign In</p>
                  </div>
                )}
              </div>
            </div>

           
              {userInfo?.isAdmin ? (
                <div className="main2" onClick={()=>{
                  setdropdown2(!dropdown2)
                  setdropdown(true)

                  }}>
                <p className="toggle ">Admin</p>
                <div className={`dropdown2 ${dropdown2 ? 'hide2' :''} `}>
                  <button onClick={()=>navigate('/admin/product')}>
                    Product
                  </button>
                  <button onClick={()=>navigate('/admin/User')}>
                    User
                  </button>
                  <button onClick={()=>navigate('/admin/Order')}>
                    Order
                  </button>
                </div>
              </div>
              ) : (
                ""
              )}
          </div>
        </div>
      </div>
      <div className="making">
        <div className="innerheader">
          <div className={` ${collapse ? "header2" : "increse"} `}>
            <div className="search2">
              <input
                className="searchin2"
                type="text"
                ref={value2}
                placeholder="Search Product..."
              />
              <button onClick={() => handelfocuse(value2)} className="butser2">
                Search
              </button>
            </div>
            <div className="arrangement">
              <div className="align nav-icon">
                <FaShoppingCart
                  size={15}
                  // className='nav-icon'
                />
                <p>Cart</p>
              </div>
              <div
                className="hedingfull2 nav-icon "
                onClick={()=>{
                  setdropdown(!dropdown)
                  setdropdown2(true)
                  }}            >
                  {userInfo ? (
                     <div className="nav-icon hedingfull2">
                    <a className="toggle ">{userInfo.name}</a>
                    <div className={`dropdown3 ${dropdown ? 'hide2' :''} `}>
                      <button onClick={() => navigate("/profile")}>
                        Profile
                      </button>
                      <button
                        onClick={async () => {
                          await logout().unwrap();
                          dispatch(Clearuserinfo());
                          navigate("/");
                        }}
                      >
                        Logout
                      </button>
                    </div>
                    </div>

                  ) : (
                    <>
                      <FaUser size={15} />
                      <p>Sign In</p>
                    </>
                  )}
                </div>
              <div
                className="hedingfull2 nav-icon "
                onClick={()=>{
                  setdropdown2(!dropdown2)
                  setdropdown(true)

                  }}
              >
                {userInfo?.isAdmin ? (
                  <div className="nav-icon hedingfull2">
                    <a className="toggle ">Admin</a>
                    <div className={`hedingfull2 dropdown3 ${dropdown2 ? 'hide2' :''} `}>
                  <button onClick={()=>navigate('/admin/product')}>
                    Product
                  </button>
                  <button onClick={()=>navigate('/admin/User')}>
                    User
                  </button>
                  <button onClick={()=>navigate('/admin/Order')}>
                    Order
                  </button>
                </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
