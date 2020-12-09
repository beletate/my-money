import React from 'react'
import { useEffect } from 'react'
import { usePost } from '../utils/rest'

const url =  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAitqCYazvZK0w1weK9kEJOvJg1tB3Qrks'

const Login = () => {
    const [postData, singin] = usePost(url)

    useEffect(() => {
        if(Object.keys(postData.data).length > 0){
            console.log('Logou!')
            localStorage.setItem('token', postData.data.idToken)
        }
    },[postData])

    const login = async() => {
        await singin({
            email: 'vinicius_beletate@hotmail.com',
            password: 'abc1234',
            returnSecureToken: true
        })
    }

    return(
        <div className='container'>
            <h1>Login</h1>
            <button className='btn btn-primary' onClick={login}>Login</button>
        </div>
    )
}

export default Login