import { useSelector } from "react-redux"
import { Link, Navigate, Outlet } from "react-router-dom"

function Check() {

    const {userInfo}=useSelector(state=>state.User)

    return ( <div>
            {userInfo ? <Outlet/> : <Navigate to={'/login'} replace/>}
        </div>
    )
}

export default Check
