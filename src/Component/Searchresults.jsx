import { useNavigate, useParams } from "react-router-dom"
import { useSearchproductQuery } from "../Store/cartslice"
import Card from "./Card"

function Searchresults() {
    const {item}=useParams()
    const {data,isLoading,error}=useSearchproductQuery(item)
    const navigate=useNavigate()
    
        return (isLoading ? <p>Loading...</p>:
            <div className="Mainscreen">
               <h1 className="latest">Latest Product</h1> 
               <button onClick={()=>navigate('/')}>Go Back</button>
               <div className="cards">
                 {data?.map((el,i)=><Card el={el} key={i}/>)}
               </div>
            </div>
    )
}

export default Searchresults
