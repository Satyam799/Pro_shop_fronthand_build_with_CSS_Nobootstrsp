import Header from "./Component/header"
import './App.css'
import Footer from "./Component/footer"
import { Outlet } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
