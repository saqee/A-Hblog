import axios from 'axios'
import {SET_LOADER, REMOVE_ERRORS,CLOSE_LOADER,POST_ERRORS,REDIRECT_TRUE,REDIRECT_FALSE,SET_MESSAGE,REMOVE_MESSAGE,SET_POST} from '../types/PostTypes'
export const postCreate=(postData)=>{
   // const token=localStorage.getItem('myToken')
   return async(dispatch,getState)=>{
     const {AuthReducer:{token}}=getState();
      try {
        dispatch({type:SET_LOADER})
          const config={
              headers:{
                  authorization:`Bearer ${token}`
              }
          }
          const {data:{msg}}=await axios.post('/create',postData,config)
          dispatch({type:REMOVE_ERRORS})
          dispatch({type:REDIRECT_TRUE})
          dispatch({type:SET_MESSAGE,payload:msg})
      } catch (error) {
        
        const { errors } = error.response.data;
        dispatch({type:"POST_ERRORS",payload:errors})
          console.log(error.response);
      }
   }
} 

export const fetchPosts=(id,page)=>{
  return async(dispatch,getState)=>{
    const {AuthReducer:{token}}=getState()
    const config={
      headers:{
        authorization:`Bearer ${token}`
      }
    }
    
     try {
      dispatch({type:SET_LOADER}) 
      const {data:{response,count,perPage}}=await axios.get(`/posts/${id}/${page}`,config)
      dispatch({type:CLOSE_LOADER})
      dispatch({type:SET_POST,payload:{response,count,perPage}})
      console.log(response);
     } catch (error) {
      dispatch({type:CLOSE_LOADER})
      const { errors } = error.response.data;
      console.log(errors);
     }
  }
}

export const fetchPost=(id)=>{
  return async(dispatch,getState)=>{
    const {AuthReducer:{token}}=getState()
    const config={
      headers:{
        authorization:`Bearer ${token}`
      }
    }
    
    try {
      dispatch({type:"SET_LOADER"})
       const {data:{post}}=await axios.get('/post/'+id,config)
       console.log(post);
       dispatch({type:"CLOSE_LOADER"})
       dispatch({type:"POST",payload:post})

       dispatch({type:"POST_REQUEST"})
    } catch (error) {
      dispatch({type:"CLOSE_LOADER"})
    }
  }
}

export const UpdatePost=(editData)=>{
  return async(dispatch,getState)=>{
    const {AuthReducer:{token}}=getState()
    const config={
      headers:{
        authorization:`Bearer ${token}`
      }
    }
    dispatch({type:"SET_LOADER"})
    try {
      const {data}=await axios.post('/update',editData,config)
    //  console.log(update.response.data.msg);
      dispatch({type:"SET_UPDATE"})
      dispatch({type:"REDIRECT_TRUE"})
      dispatch({type:"SET_MESSAGE",payload:data.msg})
      
    } catch (error) {
      dispatch({type:"CLOSE_LOADER"})
       const {response:{data:{errors},},}=error
     // console.log(error.response.data); 
      dispatch({type :"SET_UPDATE_ERRORS",payload:errors})
      dispatch({type:"SET_UPDATE_ERRORS_RESET"})
    }
  }
}

export const UpdateImage=(image)=>{
  return async(dispatch,getState)=>{
    const {AuthReducer:{token}}=getState()
    const config={
      headers:{
        authorization:`Bearer ${token}`
      }
    }
    dispatch({type:"SET_LOADER"})
    try {
      const {data:{msg}}=await axios.post('/updateImage',image,config)
      dispatch({type:"CLOSE_LOADER"})
      dispatch({type:"REDIRECT_TRUE"})
      dispatch({type:"SET_MESSAGE",payload:msg})
     
    } catch (error) {
      dispatch({type:"CLOSE_LOADER"})
      dispatch({type:"IMAGE_ERRORS",payload:error.response.data.errors})
      dispatch({type:"IMAGE_ERRORS_RESET"})
      console.log(error.response); 
    }
  }
}

export const homeAction=(page)=>{
  return async(dispatch)=>{
    dispatch({type:"SET_LOADER"})
    try {
      const {data:{response,count,perPage}}=await axios.get(`/home/${page}`)
      dispatch({type:"CLOSE_LOADER"})
      dispatch({type:"SET_POST",payload:{response,count,perPage}})
    } catch (error) {
      dispatch({type:"CLOSE_LOADER"})
    }
  } 
}
export const detailsAction=(id)=>{
  return async(dispatch)=>{
    dispatch({type:"SET_LOADER"})
    try {
      const {data:{post,commentdata}}=await axios.get(`/explore/${id}`)
     // console.log(commentdata);
      dispatch({type:"CLOSE_LOADER"})
      dispatch({type:"SET_DETAILS",payload:post}) 
      dispatch({type:"COMMENTS",payload:commentdata}) 
    } catch (error) {
      dispatch({type:"CLOSE_LOADER"})
      console.log(error);
    }
  }
}

export const postComment=(commentData)=>{
  return async(dispatch,getState)=>{
    const {AuthReducer:{token}}=getState()
    const config={
      headers:{
        authorization:`Bearer ${token}`
      }
    }
    try {
      dispatch({type:"SET_LOADER"})
       const {data}=await axios.post('/comment',commentData,config)
       console.log(data);
      dispatch({type:"CLOSE_LOADER"})
      //dispatch({type:"CLOSE_LOADER"})
      
    } catch (error) {
      dispatch({type:"CLOSE_LOADER"})
    }
  }
}