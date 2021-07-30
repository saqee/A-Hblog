import jwt_decode from "jwt-decode";

import {REGISTER_ERROR,SET_TOKEN,CLOSE_LOADER,SET_LOADER,LOGOUT} from '../types/UserTypes'
const initialState={
loading:false,
registerErrors:[],
loginErrors:[],
token:"",
user:''
}
const verifyToken=(token)=>{
   var decodedToken = jwt_decode(token);
const expiresIn=new Date(decodedToken.exp * 1000)
if(new Date() > expiresIn){
   localStorage.removeItem('myToken')
   return null;
 }
else{
   return decodedToken;
}
}
const token=localStorage.getItem('myToken')
if(token){
  const decoded= verifyToken(token)
  if(decoded){
   initialState.token=token;
   const { user } = decoded;
   initialState.user=user;
  }
}
const AuthReducer=(state=initialState,action)=>{
   if(action.type === SET_LOADER){
      return {...state,loading:true}
   }else if(action.type === CLOSE_LOADER){
      return {...state,loading:false}
   }else if(action.type === REGISTER_ERROR){
      return {...state,registerErrors:action.payload}
   }else if(action.type === "SET_TOKEN"){
      const decoded=verifyToken(action.payload)
      const { user }=decoded;
      return{
         ...state,
         token:action.payload,
         user:user,
         loginErrors:[],
         registerErrors:[]
      }
   }else if(action.type===LOGOUT){
       return {...state,token:'',user:''}
   }else if(action.type==="LOGIN_ERRORS"){
     return{...state,loginErrors:action.payload}
   }
   
   else{
      return state ;
   }
}
export default AuthReducer;