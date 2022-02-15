import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { questionListReducer, 
        addQuestionReducer,
        getInterviewListReducer,
        tagListReducer } from './reducers/QuestionsReducer'
import { userRegisterReducer, userLoginReducer } from './reducers/UserReducer'

const reducer = combineReducers({
    questionsList: questionListReducer,
    addQuestion: addQuestionReducer,
    getInterviewList: getInterviewListReducer,
    tagList: tagListReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer
})

// const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItem')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

// 在本地缓存的初始状态
const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store