import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils'



const Logout = () => {
    console.log(axiosWithAuth)
    const{ push } = useHistory()

    useEffect(() => {
        axiosWithAuth()
            .post('/auth/logout')
            .then(res => {
                localStorage.removeItem('token')
                push('/login')
            })
            .catch(err => console.log(err))
    }, [])

    return (<></>)
}

export default Logout