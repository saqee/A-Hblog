const initState={
   
    updateErrors:[]
}
export const updateName=(state=initState,action)=>{
    if(action.type==="SET_PROFILE_ERRORS"){
      return{...state,updateErrors:action.payload}
    }else if(action.type==="SET_PROFILE_ERRORS_RESET"){
        return{...state,updateErrors:[]}
      }else{
        return state;
      }
   
} 