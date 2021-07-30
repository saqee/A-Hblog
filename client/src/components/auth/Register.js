import React, { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

import {postRegister} from '../../store/asyncAction/AuthMethod'
import { useHistory } from 'react-router-dom';
const Register = () => {
    const [state,setState]=useState({
        name:'',
        email:'',
        password:'',
    })
    const handleInput=e =>{
       setState({
           ...state,
        [e.target.name]:e.target.value
       })
    }
    let history = useHistory();
    const dispatch =useDispatch()
   const {loading,registerErrors,user}=useSelector(state=>state.AuthReducer)
  
    const userRegister=async (e)=>{
        e.preventDefault();
        dispatch(postRegister(state))
        console.log(state);
    }
    useEffect(()=>{
        console.log(registerErrors);
            if(registerErrors){
                registerErrors.map(error=>(
                    toast.error(error.msg)
                ))
            }
           
        
    },[registerErrors,user])
   
    return (
        <>
        <div className="row mt-80">
            <div className="col-8">
               <div className="bgImage">
                   <Toaster></Toaster>
               </div>
            </div>
            <div className="col-4">
                
                <div className="account">
                <h2 className="form_heading">Register</h2>
                    <div className="account_section">
                        <form  onSubmit={userRegister}>
                            <div className="group">
                                <input type="text" name="name" value={state.name} onChange={handleInput} className="group_control" placeholder="name" />
                            </div>
                            <div className="group">
                                <input type="text" name="email" value={state.email} onChange={handleInput} className="group_control" placeholder="email" />
                            </div>

                            <div className="group">
                                <input type="text" name="password" value={state.password} onChange={handleInput} className="group_control" placeholder="Password" />
                            </div>

                            <div className="group">
                                <input type="submit" 
                                className="btn btn-default btn-block"
                                value={loading ? "..." :"Register"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Register;