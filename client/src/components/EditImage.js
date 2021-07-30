import React, { useEffect, useState } from 'react';
import {useHistory, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {UpdateImage} from '../store/asyncAction/PostMethod'
import toast, { Toaster } from 'react-hot-toast';
const EditImage = () => {
    const {id}=useParams();
    let history=useHistory();
    const dispatch=useDispatch()
    const {imageErrors}=useSelector(state=>state.ImageUpdate)
    const {redirect}=useSelector(state=>state.PostReducer)
    const[state,setState]=useState({
        image:'',
        imagePreview:'',
        imageName:'choose Image'
    })
    const fileHandle=(e)=>{
         if(e.target.files.length !==0){
             setState({
                 ...state,
             })
             const reader=new FileReader()
             reader.onloadend=()=>{
                 setState({...state,imagePreview:reader.result,
                    image:e.target.files[0],
                    imageName:e.target.files[0].name
                })
             }
             reader.readAsDataURL(e.target.files[0])
         }
    }
    const updateImage=(e)=>{
        e.preventDefault()
        const form=new FormData()
        form.append('id',id)
        console.log(id);
        form.append('image',state.image)
        dispatch(UpdateImage(form))
    }

    useEffect(()=>{
        if(imageErrors){
            imageErrors.map(error=>{
                toast.error(error.msg)
            })
        }
        
    },[imageErrors])
    useEffect(()=>{
        if(redirect){
            history.push('/dashboard');
        }
    })
    return (
        <div className="container mt-100">
            <div className="row">
                <Toaster/>
                <div className="col-6">
                <div className="card">
                  <form action="" onSubmit={updateImage}>
                      <div className="group">
                          <label htmlFor="image" style={{paddingTop:'2rem',cursor:'pointer', fontSize:"1.5rem"}}> {state.imageName}</label>
                          <input type="file" name="image" onChange={fileHandle} id="image" />
                      </div>
                      <div className="group">
                          {state.imagePreview ? (<div> <img src={state.imagePreview} style={{width:'100%', height:'70%',marginTop:'3rem'}}/></div>):''}
                      </div>

                      <div className="group">
                <input type="submit" 
                     
                     className="btn btn-default" style={{marginTop:'1rem'}} value="Image Post Update" />
                 
             </div>
                  </form>
                </div>
                
                </div>
            </div>
            
        </div>
    );
};

export default EditImage;