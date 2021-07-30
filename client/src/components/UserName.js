import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import SideBar from './SideBar'
import {updateNameAction} from '../store/asyncAction/ProfileMethod'
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
const UserName = () => {
    const dispacth=useDispatch()
     const history=useHistory();
    const [userName,setuserName]=useState('');
    const {user:{name,_id}}=useSelector(state=>state.AuthReducer)
    const {loading,redirect}=useSelector(state=>state.PostReducer)
    const {updateErrors}=useSelector(state=>state.updateName)
    useEffect(()=>{
        setuserName(name)
    },[])
    useEffect(()=>{
        if(updateErrors.length !==0){
           updateErrors.map(err=>{
                  toast.error(err.msg)
            })
        }
   },[updateErrors])
    const updateHandle=(e)=>{
        e.preventDefault()
        dispacth(updateNameAction({
            name:userName,
            id:_id
        }))
    }
  useEffect(()=>{
   if(redirect){
       history.push('/dashboard')
   }
  },[redirect])
    return (
        <div className="container mt-100">
               <div className="row">
                   <Toaster/>
                  <div className="col-3 p-15">
                      <SideBar/>
                  </div>
                 
                  <div className="col-6 p-15">
                  <form action="" onSubmit={updateHandle}>
                  <div className="card">
                  <h3>Update Name</h3>

           
            
                <div className="group">
                    <input type="text" name="title" onChange={(e)=>setuserName(e.target.value)} value={userName}  className="group_control" />
                </div>
                <div className="group">
                <input type="submit" 
                     
                     className="btn btn-default " value="Change Name" />
                 
             </div>
                </div>
                </form>
                </div>
              
                </div>
        </div>
    );
};

export default UserName;