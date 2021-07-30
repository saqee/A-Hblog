import React, { useState,useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {postLogin} from '../../store/asyncAction/AuthMethod'
import { useDispatch, useSelector } from 'react-redux';
const Login = () => {
    const [state,setState]=useState({
        email:'',
        password:''
    })
    const dispatch=useDispatch()
    const{loginErrors}=useSelector((state)=>state.AuthReducer)
    const hanleInput=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    const postLoginTo=async (e)=>{
        e.preventDefault();        
        dispatch(postLogin(state))
    }
    useEffect(()=>{
       // console.log(registerErrors);
            if(loginErrors){
                loginErrors.map(error=>(
                    toast.error(error.msg)
                ))
            }
            
        
    },[loginErrors])
    return (
        <>
        <div className="row mt-80">
            <div className="col-8">
               <div className="bgImage">
                   <Toaster/>
               </div>
            </div>
            <div className="col-4">
                
                <div className="account">
                <h2 className="form_heading">Login</h2>
                    <div className="account_section">
                        <form  onSubmit={postLoginTo}>
                           
                            <div className="group">
                                <input type="text" name="email" onChange={hanleInput} value={state.email} className="group_control" placeholder="email" />
                            </div>

                            <div className="group">
                                <input type="text" name="password" onChange={hanleInput} value={state.password} className="group_control" placeholder="Password" />
                            </div>

                            <div className="group">
                                <input type="submit" 
                                className="btn btn-default btn-block"
                                value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Login;