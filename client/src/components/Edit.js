import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {fetchPost,UpdatePost} from '../store/asyncAction/PostMethod'
import {useHistory, useParams} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import Loader from './Loader';
const Edit = () => {
    let history=useHistory();
    
    const {id}=useParams();
    const dispatch=useDispatch()
    const {post,postStatus}=useSelector(state=>state.FetchPost)
    const {editErrors}=useSelector(state=>state.UpdatePost)
    const {loading,redirect}=useSelector(state=>state.PostReducer)
  //  console.log(title);
    const [state,setState]=useState({
        title:'',
        description:''
    })
  
    const [value,setValue]=useState('')
    
    useEffect(()=>{
        if(postStatus){
            setState({
                title:post.title,
                description:post.description 
            })
            setValue(post.body)
        }else{
            dispatch(fetchPost(id))
        }
    },[post])
    console.log(post);
    const updatePostSignal=async (e)=>{
        e.preventDefault()
        dispatch(UpdatePost({
            title:state.title,
            description:state.description,
            body:value,
            id:post._id
        }))
    }

    useEffect(()=>{
        if(editErrors.length !==0){
            editErrors.map(error=>{
                toast.error(error.msg)
            })
        }
        
    },[editErrors])

    useEffect(()=>{
        if(redirect){
            history.push('/dashboard');
        }
    })
    return !loading ? ( <div className="mt-100">
    <div className="container">
    <Toaster/>
        <form onSubmit={updatePostSignal}>
        <div className="row">
            <div className="col-7">
                <div className="card">
        <div className="group">
            <input type="text" name="title" onChange={(e)=>setState({...state,title:e.target.value})} value={state.title}  className="group_control"  />
        </div>
        <ReactQuill theme="snow" value={value} onChange={setValue}/>
        </div>
        <div className="group">
            <textarea type="text" name="description" defaultValue={state.description} onKeyUp={(e)=>setState({ ...state,description:e.target.value})} onChange={(e)=>setState({ ...state,description:e.target.value})}  className="group_control" placeholder="Post description" rows="10" cols="10" />
        </div>
        <span>{state.description ? state.description.length :"0"}</span>
        <div className="group">
        <input type="submit" 
             className="btn btn-default btn-block" value="Edit Post" />
     </div>
     </div>
        </div>
        </form>
    </div>
   
</div>) :( <Loader></Loader>)
};

export default Edit;