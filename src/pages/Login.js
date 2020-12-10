import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { usePost } from '../utils/rest'

const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAitqCYazvZK0w1weK9kEJOvJg1tB3Qrks'

const Login = () => {
    const [postData, singin] = usePost(url)
    const [logado, setLogado] = useState(false)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    useEffect(() => {
        if (Object.keys(postData.data).length > 0) {
            console.log('Logou!')
            localStorage.setItem('token', postData.data.idToken)
            window.location.reload()
        }
    }, [postData])

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setLogado(true)
        }
    })

    const login = async () => {
        await singin({
            email,
            password: senha,
            returnSecureToken: true
        })
    }

    const onChangeEmail = evt => {
        setEmail(evt.target.value)
    }
    const onChangeSenha = evt => {
        setSenha(evt.target.value)
    }
    if (logado) {
        return <Redirect to='/' />
    }

    return (
        <div className='container'>
            <h1>Login</h1>
            {
                postData.error && postData.error.length > 0 &&
                <p>E-mail e/ou senha inválidos!</p>
            }
            <input type='text' value={email} onChange={onChangeEmail} placeholder='Seu e-mail' />
            <input type='password' value={senha} onChange={onChangeSenha} placeholder='Sua senha' />
            <button className='btn btn-primary' onClick={login}>Login</button>
        </div>
    )
}

export default Login