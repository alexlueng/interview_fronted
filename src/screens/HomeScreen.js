import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { listQuestions, getInterviewList } from '../actions/questionActions'
import Question from '../components/Question'
import PopupScreen from './PopupScreen';

import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const HomeScreen = () => {

    // 模拟面试按钮再次点击时需要点两次才出弹出弹窗
    // 原因：isOpen变量在两个不同的组件中，在popup中关闭并不会改变HomeScreen中的值
    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = (e) => {
        // console.log(isOpen)
        e.preventDefault()
        setIsOpen(!isOpen)
        dispatch(getInterviewList())
        // console.log("interviewList: ",interviewList)
        
    }

    const [ questionType, setQuestionType ] = useState('all')

    const dispatch = useDispatch()
    const questionsList = useSelector((state) => state.questionsList)
    const interviewList = useSelector((state) => state.getInterviewList)
    const { loading, error, questions } = questionsList
    const { interview_questions } = interviewList

    // const userInfo  = localStorage.getItem('userInfo')


    useEffect(() => {
        dispatch(listQuestions())
    }, [dispatch, isOpen])


  return <section>
      
      <div className="w-full max-w px-4">
            <div className="rounded-lg border pb-6 border-gray-200">
                <div className="flex items-center border-b border-gray-200 justify-between px-6 py-3">
                    <div className="flex">
                        <p tabIndex="0" className="focus:outline-none mt-4 text-sm lg:text-xl font-semibold leading-tight text-gray-800">所有面试题</p>
                        {/* <button className="focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:bg-indigo-50 flex cursor-pointer items-center justify-center px-3 py-2.5 border rounded border-gray-100">
                            <p  className="focus:outline-none text-xs md:text-sm leading-none text-gray-600">Filter by: Latest</p>
                        </button> */}
                                  <Box className="pl-4 h-8">
                                    <FormControl className="w-40">
                                    <InputLabel>类型</InputLabel>
                                    <Select
                                        value={questionType}
                                        label="类型"
                                        // onChange={handleChange}
                                        className="h-10 text-sm"
                                    >
                                        <MenuItem value={"all"}>all</MenuItem>
                                        <br></br>
                                        <MenuItem value={"golang"}>golang</MenuItem>
                                        <br></br>
                                        <MenuItem value={"op"}>操作系统</MenuItem>
                                        <br></br>
                                        <MenuItem value={"database"}>数据库</MenuItem>
                                        <br></br>
                                        <MenuItem value={"blockchain"}>区块链</MenuItem>
                                    </Select>
                                    </FormControl>
                                </Box>

                    </div>
                    <button 
                    className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                    data-modal-toggle="defaultModal"
                    onClick={togglePopup}>模拟面试</button>
                </div>


                <div className="px-6 pt-6 overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                        <tbody>
                        {questions.map((q => (
                            <Question key={q.id} question={q} />
                        )))}
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>

        {isOpen && interview_questions.length > 0 && <PopupScreen questions={interview_questions}></PopupScreen>}

    
  </section>

  
};

export default HomeScreen;
