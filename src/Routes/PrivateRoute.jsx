import useAuth from "../Hooks/useAuth";
import {Navigate} from "react-router-dom"
import {useLocation}  from "react-router-dom"
const PrivateRoute = ({children}) => {
    const{user,loading} = useAuth();
    const location = useLocation();
    // console.log(location);
    if(loading){
        return <div className="flex justify-center items-center mt-10"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={location?.pathname || '/'}></Navigate>
};

export default PrivateRoute;