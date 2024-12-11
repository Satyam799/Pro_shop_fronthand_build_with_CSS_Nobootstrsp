import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

function Admincheck() {
    const {userInfo}=useSelector(state=>state.User)
    return (
        <div>
            {userInfo.isAdmin ? <Outlet/> : <Navigate to={'/'} replace/>}
        </div>
    )
}

export default Admincheck
