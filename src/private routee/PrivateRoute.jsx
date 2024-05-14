
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../auth provider/AuthProvider";
import { Triangle } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
    const { userInfo, loading } = useContext(AuthContext)
    if (loading) {
        // return <span className="loading loading-infinity loading-lg"></span>
        return <div className="relative min-h-screen flex justify-center items-center">
            (<Triangle
                visible={true}
                height="80"
                width="80"
                color="#6b34eb"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />)
        </div>
    }

    if (userInfo) {
        return children;
    }
    return <Navigate to='/signin'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;