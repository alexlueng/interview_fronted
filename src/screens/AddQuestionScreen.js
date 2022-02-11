import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion } from '../actions/questionActions';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddQuestionScreen = ({ location, history }) => {

  const dispatch = useDispatch()
  const redirect = location.search ? location.search.split('=')[1] : '/'

  const userAddQuestion = useSelector(state => state.addQuestion)
  

  // const [loading, questionInfo, error] = userAddQuestion

  const [question, setQuestion] = useState('') 
  const [answer, setAnswer] = useState('') 
  const [questionType, setQuestionType] = useState('none')

  const submitHandler = (e) => {
    console.log("submit question")
    e.preventDefault()

    dispatch(addQuestion(question, answer, questionType, ''))
  }

  const handleChange = (e) => {
    setQuestionType(e.target.value)
  }

  useEffect(() => {
    console.log(questionType)

    // if (questionInfo) {
    //   history.push(redirect)
    // }
  // }, [questionType, questionInfo, history, redirect])
  }, [questionType, redirect])


  return <div className="w-full max-w px-4 flex justify-center">
    
    <form onSubmit={submitHandler}>

      <div className="mb-6 flex">
        <div>

          <label htmlFor="question" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">问题</label>

          <input type="text" 
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 h-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="请说说go的内存模型" 
          required=""
          onChange={(e) => setQuestion(e.target.value)} />
        </div>

      {/* dropdown */}
        <div className="relative inline-block text-left left-4 top-7">
        <Box>
          <FormControl className='w-40 h-8'>
            <InputLabel>类型</InputLabel>
            <Select
              value={questionType}
              label="类型"
              onChange={handleChange}
              // className="text-right"
            >
              <MenuItem value={"none"}>None</MenuItem>
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
        
      </div>

      <div className="mb-6">
        <label htmlFor="answer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">答案</label>

        <textarea  
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 h-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        required=""
        onChange={(e) => setAnswer(e.target.value)} />
      </div>

      {/* choose tags */}
      <div className="flex justify-items-start">
        <div>
          <label htmlFor="answer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">选择标签</label>
          <div className="border-2 w-96 h-20 flex justify-around">
            <Button className="bg-green-200 rounded h-8">#二叉树</Button>
            <Button className="bg-green-200  rounded h-8">#mysql</Button>
            <Button className="bg-green-200 rounded h-8">#java</Button>
            <Button className="bg-green-200 rounded h-8">#python</Button>
            <Button className="bg-green-200 rounded h-8">#shell</Button>
          </div>
        </div>
        <div className="px-4 pt-10">
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">提交</button>
        </div>
      </div>
     
    </form>

  </div>;
};

export default AddQuestionScreen;
