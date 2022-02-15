import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'


const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    // const { userRegisterInfo } = userRegister
    const userRegister = useSelector(state => state.userRegister)
    const { userRegisterInfo } = userRegister
    // console.log("user register info: ", userRegisterInfo)

    

    const logoutHandler = () => {
        dispatch(logout())
    }
    
    
    return (
        <header>
            
        <div className=" bg-white ">
            <nav className="container mx-auto sm:py-6 sm:px-7 py-2 px-4">
                <div className="flex justify-between "> 
                    <div className="hidden sm:flex flex-row items-center space-x-6">
                        {/* <img className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg1.svg" alt="twitter" />                       
                       <img className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg2.svg" alt="facebook" />
                        <img className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg3.svg" alt="linkdin" />
                        <img className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg4.svg" alt="instagram" />                                                              */}
                        <p className="text-gray-600">你已经失业225天了，赶紧找工作！</p>
                    </div>
                    <div className="">
                        <Link to="/" className='flex items-center'>
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg5.svg" alt="circle" />                 
                            <h1 className=" font-normal text-2xl leading-6 text-gray-800 pl-4" >面试题广场</h1>
                        </Link>
                    </div>

                    {userInfo || userRegisterInfo ? 
                    <div className="hidden md:flex items-center pr-8">
                    <div className=''>
                        <h3 className='text-md pr-4'>
                            欢迎，{ userInfo ? userInfo.username : userRegisterInfo.username}
                        </h3>
                    </div>
                    <div>
                        <button type='button' className='text-sm' onClick={logoutHandler}>退出</button>
                    </div>
                </div> : <div className="hidden sm:flex flex-row space-x-4">
                        <Link to="/register">
                        <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >注册</button>
                        </Link>
                        
                        <Link to="/login">
                        <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center" >登录</button>
                        </Link>
                    </div> }

                    
                    

                    <div id="bgIcon" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  flex justify-center items-center sm:hidden cursor-pointer">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg6.svg" alt="burger" />
                       <img className=" hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg7.svg" alt="cross" />                                                               
                    </div>
                </div>

                <div id="MobileNavigation" className="hidden sm:hidden mt-4 mx-auto">
                    <div className="flex flex-row items-center justify-center space-x-6">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg1.svg" alt="twitter" />                       
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg2.svg" alt="facebook" />
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg3.svg" alt="linkdin" />
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-3-svg4.svg" alt="instagram" />                                                             
                    </div>
                    <div className="flex flex-col gap-4 mt-4 w-80 mx-auto ">
                        <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-indigo-700 bg-indigo-600 bg-opacity-0 hover:opacity-100 duration-100 border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center" >登录</button>
                        <Link to="/register">
                        <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center" >注册</button>
                        </Link>
                    </div>
                </div>
            </nav>    
        </div>
      
    
        </header>
    )
}

export default Header
