import { 
    QUESTION_LIST_REQUEST, 
    QUESTION_LIST_SUCCESS, 
    QUESTION_LIST_FAIL,
    GET_INTERVIEW_LIST,
    GET_INTERVIEW_LIST_FAIL,
    ADD_QUESTION_REQUEST,
    ADD_QUESTION_SUCCESS,
    ADD_QUESTION_FAIL,
    TAG_LIST_REQUEST,
    TAG_LIST_SUCCESS,
    TAG_LIST_FAIL } from '../constants/QuestionConstants'


export const questionListReducer = (state = { questions: [] }, action) => {
    // console.log("questionListReducer")
    // console.log(action.type)
    switch ( action.type ) {
        case QUESTION_LIST_REQUEST:
            // console.log("question list request")
            return {loading: true, questions: []}
        case QUESTION_LIST_SUCCESS:
            // console.log("questionListReducer: ", action.questions.data)
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

export const getInterviewListReducer = (state = {interview_questions: []}, action) => {
    // console.log("getInterviewListReducer: ", action.type)
    switch ( action.type ) {
        case GET_INTERVIEW_LIST:
            // console.log("reducer interview_questions: ", action.interview_questions.data)
            return {loading: false, interview_questions: action.interview_questions.data }
        case GET_INTERVIEW_LIST_FAIL:
            return {loading: false, error: action.payload }
        default:
            return state
    }
}

export const tagListReducer = (state = {tag_list: []}, action) => {
    // console.log("tagListReducer action type###################: ", action.type)
    switch (action.type) {
        case TAG_LIST_REQUEST:
            return {loading: true}
        case TAG_LIST_SUCCESS:
            return {loading: false, tag_list: action.tag_list.data}
        case TAG_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}