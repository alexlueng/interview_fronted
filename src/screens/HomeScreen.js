import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { listQuestions, getInterviewList } from '../actions/questionActions'
import Question from '../components/Question'
import PopupScreen from './PopupScreen';


const HomeScreen = () => {

    // 模拟面试按钮再次点击时需要点两次才出弹出弹窗
    // 原因：isOpen变量在两个不同的组件中，在popup中关闭并不会改变HomeScreen中的值
    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = (e) => {
        // console.log(isOpen)
        e.preventDefault()
        setIsOpen(!isOpen)
        dispatch(getInterviewList())
        
    }

    const dispatch = useDispatch()
    const questionsList = useSelector((state) => state.questionsList)
    const interviewList = useSelector((state) => state.getInterviewList)
    const { loading, error, questions } = questionsList
    
    useEffect(() => {
        console.log(isOpen)
        // console.log(interviewList)
        dispatch(listQuestions())
    }, [dispatch, isOpen])

    // console.log(questionsList.questions)

  return <section>
      
      <div className="w-full max-w px-4">
            <div className="rounded-lg border pb-6 border-gray-200">
                <div className="flex items-center border-b border-gray-200 justify-between px-6 py-3">
                    <div className="flex">
                        <p tabIndex="0" className="focus:outline-none mt-4 text-sm lg:text-xl font-semibold leading-tight text-gray-800">所有面试题</p>
                        <button className="focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:bg-indigo-50 flex cursor-pointer items-center justify-center px-3 py-2.5 border rounded border-gray-100">
                        <p  className="focus:outline-none text-xs md:text-sm leading-none text-gray-600">Filter by: Latest</p>
                    </button>
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

        {isOpen && <PopupScreen></PopupScreen>}

    
  </section>

  
};

export default HomeScreen;
