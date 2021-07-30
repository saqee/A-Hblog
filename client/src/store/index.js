import {createStore,applyMiddleware,combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk'

import AuthReducer from './reducers/AuthReducer'
import {updateName} from './reducers/ProfileReducer'
import {PostReducer,FetchPosts,FetchPost,UpdatePost,ImageUpdate} from './reducers/PostReducer'
const rootReducers=combineReducers({
    AuthReducer,PostReducer,FetchPosts,FetchPost,UpdatePost,ImageUpdate,updateName
})
const middlewares=[thunkMiddleware]
const Store=createStore(rootReducers,composeWithDevTools(
    applyMiddleware(...middlewares)
  ))

export default Store;