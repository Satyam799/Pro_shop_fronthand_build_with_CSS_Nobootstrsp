import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Mainscreen from './Screens/Mainscreen.jsx'
import Product from './Screens/Product.jsx'
import Cart from './Screens/Cart.jsx'
import { Provider } from 'react-redux'
import store from './Store/store.jsx'
import Login from './Screens/Login.jsx'
import Shipping from './Screens/Shipping.jsx'
import Check from './Component/Check.jsx'
import Payment from './Screens/payment.jsx'
import PlaceOrder from './Screens/PlaceOrder.jsx'
import Order from './Screens/Order.jsx'
import Profile from './Screens/Profile.jsx'
import AdminProduct from './Screens/Admin/AdminProduct.jsx'
import AdminOrder from './Screens/Admin/AdminOrder.jsx'
import AdminUser from './Screens/Admin/AdminUser.jsx'
import Admincheck from './Component/Admincheck.jsx'
import EditProductAdmin from './Screens/Admin/EditProductAdmin.jsx'
import Useredit from './Screens/Admin/Useredit.jsx'
import Searchresults from './Component/Searchresults.jsx'

const router=createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<App/>}> 
  <Route path='/' index={true} element={<Mainscreen/>}/>
  <Route path='/product/:id' element={<Product/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/search/:item' element={<Searchresults/>}/>

  <Route path='' element={<Check/>}>
    <Route path='/shipping' element={<Shipping/>}/>
    <Route path='/payment' element={<Payment/>}/>
    <Route path='/placeorder' element={<PlaceOrder/>}/>
    <Route path='/orders/:id' element={<Order/>}/>
    <Route path='/profile' element={<Profile/>}/>
  </Route>
  <Route path='' element={<Admincheck/>}>
    <Route path='/admin/product' element={<AdminProduct/>}/>
    <Route path='/admin/Order' element={<AdminOrder/>}/>
    <Route path='/admin/User' element={<AdminUser/>}/>
    <Route path='/admin/product/:id' element={<EditProductAdmin/>}/>
    <Route path='/admin/user/:id'  element={<Useredit/>}/>
  </Route>
</Route>
))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
