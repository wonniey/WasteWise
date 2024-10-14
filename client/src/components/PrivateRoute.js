import React, { useEffect, useState } from "react";
import Error404 from "../pages/Error404";

const PrivateRoute = ({ element: Component, ...rest}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        // every logged in user will have own token
        const token = localStorage.getItem('token')

        if (token) {
            setIsAuthenticated(true)
        }

        else {
            setIsAuthenticated(false)
        }
    }, [])

    return isAuthenticated ? <Component {...rest} /> : <Error404 />
}

export default PrivateRoute;