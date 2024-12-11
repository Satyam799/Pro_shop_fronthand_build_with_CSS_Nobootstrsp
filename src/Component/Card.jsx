// import airpods from '../assets/airpods.jpg'
import { Link } from 'react-router-dom'
import Rating from './Rating'


function Card({el}) {
    return (
        <div className="cardcreation">
            <Link to={`/product/${el?._id}`}><img src={el?.image} alt='no image'/></Link>
            <div className='cardbody'>
                <div className='bodylink'>
                    <Link to={`/product/${el?._id}`}>{el?.name}</Link>
                </div>
                <Rating value={el?.rating} text={`${el?.numReviews} reviews`}/>
                <h3>${el?.price}</h3>
            </div>
        </div>
    )
}

export default Card
