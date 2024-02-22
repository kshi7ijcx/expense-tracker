import { Navigate } from "react-router-dom"

const PrivateRoutes = ({children}) => {
    const user = true
    return user ? children : <Navigate to='/'/>
}
export default PrivateRoutes