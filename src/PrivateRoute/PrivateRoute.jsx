import React, { useContext } from 'react'
import { userContext } from '../Providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import { ColorRing } from  'react-loader-spinner'
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(userContext)
    const destinationUrl = useLocation()?.pathname;
    if(loading){
        return <ColorRing
        visible={true}
        height="180"
        width="180"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    }
    if(!user){
        return <Navigate to="/login" state={{from:destinationUrl}} replace></Navigate>
    }
    return children
}

export default PrivateRoute