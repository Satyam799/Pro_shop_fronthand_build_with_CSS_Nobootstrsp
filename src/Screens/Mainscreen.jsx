import Card from "../Component/Card"
import { useGetItemsQuery } from "../Store/cartslice"



function Mainscreen() {
    let a=[1,5,7,4,1,2,5,8,7]
    const {data,isLoading,error}=useGetItemsQuery()
    return (isLoading ? <p>Loading...</p>:
        <div className="Mainscreen">
           <h1 className="latest">Latest Product</h1> 
           <div className="cards">
             {data?.data?.map((el,i)=><Card el={el} key={i}/>)}
           </div>
        </div>
    )
}

export default Mainscreen
