import axios from 'axios'
export const updateNameAction=(updateData)=>{
    return async(dispatch,getState)=>{
        const {AuthReducer:{token}}=getState()
        const config={
            headers:{
                authorization:`Bearer ${token}`
            }
        }
        dispatch({type:"SET_LOADER"})
        try {
            const {data}=await axios.post('/updateName',updateData,config)//may b its a request
            
            dispatch({type:"CLOSE_LOADER"})
            localStorage.setItem('myToken',data.token)
            dispatch({type:"SET_TOKEN",payload:data.token})
            dispatch({type:"SET_MESSAGE",payload:data.msg})
            dispatch({type:"REDIRECT_TRUE"})
        } catch (error) {
            dispatch({type:"CLOSE_LOADER"})
            dispatch({type:"SET_PROFILE_ERRORS",payload:error.response.data.errors}) //may b its a response
            dispatch({type:"SET_PROFILE_ERRORS_RESET"})
            //console.log(error.response.data);
        }
    }
}