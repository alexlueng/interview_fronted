import { 
    QUESTION_LIST_REQUEST, 
    QUESTION_LIST_SUCCESS, 
    QUESTION_LIST_FAIL,
    GET_INTERVIEW_LIST,
    ADD_QUESTION_REQUEST,
    ADD_QUESTION_SUCCESS,
    ADD_QUESTION_FAIL } from '../constants/QuestionConstants'


export const questionListReducer = (state = { questions: [] }, action) => {
    switch ( action.type ) {
        case QUESTION_LIST_REQUEST:
            // console.log("question list request")
            return {loading: true, questions: []}
        case QUESTION_LIST_SUCCESS:
            // console.log(action.questions.data)
            return { loading: false, questions: action.questions.data }
        case GET_INTERVIEW_LIST:
            return { loading: false, questions: action.questions.data }
        case QUESTION_LIST_FAIL:
            // console.log("question request fail")
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const addQuestionReducer = (state = {}, action) => {
    switch ( action.type ) {
        case ADD_QUESTION_REQUEST:
            return {loading: true}
        case ADD_QUESTION_SUCCESS:
            return {loading: false, questionInfo: action.payload}
        case ADD_QUESTION_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const getInterviewListReducer = (state = {}, action) => {
    switch ( action.type ) {
        case GET_INTERVIEW_LIST:
            return {loading: false, interview_questions: action.payload }
        default:
            return state
    }
}