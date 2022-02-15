import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { login } from "../actions/userActions"

const LoginScreen = ({ location, history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            console.log("login userInfo: ", userInfo)
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <div className="flex  justify-center min-h-screen bg-white">
            <div className="px-32 py-4 mt-2 h-96 bg-white shadow-lg">
                <h3 className="text-xl font-bold text-center">登录</h3>
                <form onSubmit={submitHandler}>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <div className="pr-4 text-center pt-4">
                                <label className="" htmlFor="email">邮箱</label>
                            </div>
                            <div>
                                    <input 
                                    type="text"
                                    placeholder="Email"
                                    className="pl-4 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div className="pr-4 text-center pt-4" >
                                <label className="" htmlFor="password">密码</label>
                            </div>
                            <div>
                                    <input 
                                    type="password" 
                                    placeholder="Password"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" 
                                    onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>
                        <div className="flex items-baseline justify-between">

                            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" 
                            >登录</button>

                            <Link to="/register" className="pl-16 text-sm text-blue-600 hover:underline">注册</Link>

                            <Link to="/" className="text-sm text-blue-600 hover:underline">忘记密码?</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen
