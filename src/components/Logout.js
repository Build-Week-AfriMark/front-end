import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils'



const Logout = (props) => {
    console.log(axiosWithAuth)
    const{ push } = useHistory()

    useEffect(() => {
        localStorage.removeItem('token')
        props.setTokenState(false)
        push('/login')
    }, [])

    return (<></>)
}

export default Logout