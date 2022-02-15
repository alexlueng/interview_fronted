import axios from 'axios'
import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_REQUEST
     } from '../constants/UserConstants'

// login gets back: user id, name, email, isAdmin, token
// 第一个括号传入请求参数，第二个一般传入dispatch，getState
// 一个接口一个export const
// 一个接口处理与constants里定义的状态
// 这个接口需要引入到store里，供其他页面引用
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('http://127.0.0.1:8001/v1/user/login', {email, password}, config)
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data.data
        })
        console.log("data", JSON.stringify(data))
        console.log("data.data", JSON.stringify(data.data))
        localStorage.setItem('userInfo', JSON.stringify(data.data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({
        type: USER_LOGOUT
    })
}

export const register = (username, email, password) => async (dispatch) => {
    console.log("user register")
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('http://127.0.0.1:8001/v1/user/register', {username, email, password}, config)
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data.data
        })
        // console.log("user register response: ", data)
        // console.log(JSON.stringify(data))
        localStorage.setItem('userInfo', JSON.stringify(data.data))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}