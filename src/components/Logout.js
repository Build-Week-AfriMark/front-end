import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils'



const Logout = (props) => {
    console.log(axiosWithAuth)
    const{ push } = useHistory()

    useEffect(() => {
        axiosWithAuth()
            .post('/auth/logout')
            .then(res => {
                localStorage.removeItem('token')
                props.setTokenState(false)
                push('/login')
            })
            .catch(err => console.log(err))
    }, [])

    return (<></>)
}

export default Logout