import {SET_LOADER,SET_POST, CLOSE_LOADER,POST_ERRORS,REDIRECT_TRUE,REDIRECT_FALSE,SET_MESSAGE,REMOVE_MESSAGE,REMOVE_ERRORS} from '../types/PostTypes'

const initState={
    loading:false,
    postErrors:[],
    redirect:false,
    message:'',
    posts:[],
    count:0,
    perPage:0,
    post:{},
    postStatus:false,
    updatePost:[],
    editErrors:[],
    imageErrors:[],
    details:{},
    comments:[]
}

export const PostReducer=(state=initState,action)=>{
      if(action.type===SET_LOADER){
          return {...state,loading:true}
      }else if(action.type===CLOSE_LOADER){
          return {...state,loading:false}
      }else if(action.type===POST_ERRORS){
          return{...state,postErrors:action.payload}
      }
      else if(action.type===POST_ERRORS){
        return{...state,postErrors:action.payload}
    }
      else if(action.type===REDIRECT_TRUE){
        return{...state,redirect:true}
    }
    else if(action.type===REDIRECT_FALSE){
        return{...state,redirect:false}
    }
    else if(action.type===SET_MESSAGE){
        return{...state,message:action.payload}
    }
    else if(action.type===REMOVE_MESSAGE){
        return{...state,message:''}
    }
    else if(action.type===REMOVE_ERRORS){
        return{...state,postErrors:[]}
    }else if(action.type==="SET_DETAILS"){
        return{...state,details:action.payload}
    }else if(action.type==="COMMENTS"){
        return{...state,comments:action.payload}
    }
   else{
    return state;
   }
}

export const FetchPosts=(state=initState,action)=>{
    if(action.type=== SET_POST){
        return {...state,posts:action.payload.response,count:action.payload.count,perPage:action.payload.perPage}
    }else{
        return state;
    }
}
export const FetchPost=(state=initState,action)=>{
 if(action.type==="POST"){
     return {...state,post:action.payload} 
 }if(action.type==="POST_REQUEST"){
    return {...state,postStatus:true} 
}
 else{
     return state ;
 }
}

export const UpdatePost=(state=initState,action)=>{
    if(action.type==="SET_UPDATE"){
        return{...state,updatePost:action.payload}
    }
    else if(action.type==="SET_UPDATE_ERRORS"){
        return{...state,editErrors:action.payload}
    }else if(action.type==="SET_UPDATE_ERRORS_RESET"){
        return{...state,editErrors:[]}
    }
    else{
        return state;
    }
}

export const ImageUpdate=(state=initState,action)=>{
   if(action.type==="IMAGE_ERRORS"){
       return {...state,imageErrors:action.payload} 
   }else if(action.type==='IMAGE_ERRORS_RESET'){
    return {...state,imageErrors:''} 
   }
   else{
       return state;
   }
}