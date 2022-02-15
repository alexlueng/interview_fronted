import axios from 'axios'

import { 
    QUESTION_LIST_REQUEST, 
    QUESTION_LIST_SUCCESS, 
    QUESTION_LIST_FAIL,
    GET_INTERVIEW_LIST,
    GET_INTERVIEW_LIST_FAIL,
    ADD_QUESTION_REQUEST,
    ADD_QUESTION_SUCCESS,
    ADD_QUESTION_FAIL, 
    TAG_LIST_FAIL, 
    TAG_LIST_SUCCESS, 
    TAG_LIST_REQUEST } from '../constants/QuestionConstants'

export const getInterviewList = () => async (dispatch) => {

    // console.log("getInterviewList")

    try {
        const { data } = await axios.get('http://127.0.0.1:8001/v1/start_interview')
        // then(response => {
        //     console.log("getInterviewList Success =============>", response)
        // }).catch(error => {
        //     console.log("Error===============>", error)
        // })
        // console.log("getInterviewList data@: ", data.data)
        dispatch({
            type: GET_INTERVIEW_LIST,
            interview_questions: data
        })
    } catch( error ) {
        // console.log("Get interview list error")
        dispatch({
            type: GET_INTERVIEW_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const listQuestions = () => async (dispatch) => {
    try {
        dispatch({type: QUESTION_LIST_REQUEST})
        const { data } = await axios.get('http://127.0.0.1:8001/v1/question')
        console.log(data.data)
        dispatch({
            type: QUESTION_LIST_SUCCESS,
            questions: data
        })
    } catch (error) {
        dispatch({
            type: QUESTION_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const addQuestion = (question, answer, questionType, hardLevel, tags) => async (dispatch) => {
    try {
        dispatch({type: ADD_QUESTION_REQUEST})
        const config = {
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*'
            }
        }
        const questionRequest = {
            user_id: 1,
            quest: question,
            quest_type: questionType,
            answer: answer,
            hard_level: hardLevel,
            tags: []
        }
        const { data } =  await axios.post('http://127.0.0.1:8001/v1/question', questionRequest, config).then(response => {
            console.log("Success =============>", response)
        }).catch(error => {
            console.log("Error===============>", error)
        })
        // const { data } = await axios.post('http://192.168.56.102:8021/v1/user/pwd_login', {mobile, password}, config)

        dispatch({
            type: ADD_QUESTION_SUCCESS,
            payload: data
        })
    } catch(error) {
        dispatch({
            type: ADD_QUESTION_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const tagList = () => async (dispatch) => {
    try {
        dispatch({type: TAG_LIST_REQUEST})
        const { data } = await axios.get('http://127.0.0.1:8001/v1/tags')
        // console.log("tag list: ", data.data)
        dispatch({
            type: TAG_LIST_SUCCESS,
            tag_list: data
        })
    } catch (error) {
        dispatch({
            type: TAG_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}