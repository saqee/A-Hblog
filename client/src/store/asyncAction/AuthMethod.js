import axios from 'axios'
import {REGISTER_ERROR,SET_TOKEN,CLOSE_LOADER,SET_LOADER,SET_POST} from '../types/UserTypes'
export const postRegister= (state)=>{
  return  async (dispatch)=>{
    const config={
      headers:{
        'Content-Type':'application/json'
      },
    }
    dispatch({type:SET_LOADER})
    try {
        const {data}=await axios.post('/register',state,config)
        dispatch({type:CLOSE_LOADER})
        localStorage.setItem("myToken",data.token)
        dispatch({type:SET_TOKEN,payload:data.token})
        //console.log(response);
    } catch (error) {
        dispatch({type:REGISTER_ERROR,payload:error.response.data.errors})
        dispatch({type:"CLOSE_LOADER"})
       // console.log(error.response);
    }

  }
}

export const postLogin=(state)=>{
  return async(dispatch)=>{
    const config={
      headers:{
        'Content-Type':'application/json'
      },
    }
    dispatch({type:SET_LOADER})
     try {
     
      const {data}=await axios.post('/login',state,config)
      dispatch({type:CLOSE_LOADER})
      localStorage.setItem("myToken",data.token)
      dispatch({type:"SET_TOKEN",payload:data.token})
     } catch (error) {
       dispatch({type:CLOSE_LOADER})
       dispatch({type:'LOGIN_ERRORS',payload:error.response.data.errors})
     }
  }
}