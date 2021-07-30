import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useSelector, useDispatch} from 'react-redux'
import {postCreate} from '../store/asyncAction/PostMethod'

import toast, { Toaster } from 'react-hot-toast';
const Create = (props) => {
    const {postErrors,redirect,message} =useSelector(state=>state.PostReducer)
    const {user}=useSelector(state=>state.AuthReducer)
    const dispacth=useDispatch()
    const [currentImage,setCurrentImage]=useState('Choose Image')
    const [previewImage,setpreviewImage]=useState('')
    const [slug, setslug] = useState('');
    const [slugButton, setslugButton] = useState(false);
    const [state,setState]=useState({
        title:'',
        description:'',
        image:''
    })
    const {name,_id}=user

    const handleInput=(e)=>{
        setState({...state,
         [e.target.name]:e.target.value
        })
        const createSlug=e.target.value.trim().split(' ').join('-');
      setslug(createSlug)
    }
    const handleUrl=(e)=>{
       
      setslug (e.target.value)
      setslugButton(true)
    }
   const slugHandle=(e)=>{
        e.preventDefault();
        setslug(slug.trim().split(' ').join('-'))
    }
    const [value, setValue] = useState('');

    const fileChange=(e)=>{
       if( e.target.files.length !==0) {
        setCurrentImage( e.target.files[0].name)
        var reader=new FileReader()
        reader.onloadend=()=>{
            setpreviewImage(reader.result)
        }
        reader.readAsDataURL(e.target.files[0])

        setState({
            ...state,
            [e.target.name]:e.target.files[0]
        })
       }
 

    }
    const handleDescription=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    const createPost=(e)=>{
        e.preventDefault()
        const {title,description,image}=state;
        const formData=new FormData()
        formData.append('slug',slug); 
        formData.append('body',value); 
        formData.append('name',name); 
        formData.append('id',_id); 
        formData.append('title',title); 
        formData.append('description',description); 
        formData.append('image',image); 
        dispacth(postCreate(formData))
      //  console.log(state);
    }
    useEffect(()=>{
        if(redirect){
            props.history.push('/dashboard')
        }
       if(postErrors.length !==0){
           postErrors.map((err)=>
               toast.error(err.msg)
           )
       }
    },[postErrors,redirect])
return (
<div className="create mt-100" >

<div className="container">
<Toaster/>
<form onSubmit={createPost}>
    <div className="row">
        <div className="col-6">
        <div className="card">
            <h3>Create Post</h3>

      
            
                <div className="group">
                    <input type="text" name="title" onChange={handleInput} value={state.title}  className="group_control" placeholder="Title" />
                </div>

                <div className="group">
                    <label htmlFor="image" className="image_label">{currentImage}</label>
                    <input type="file" id="image" name="image"
                    onChange={fileChange} 
                    className="group_control" placeholder="" />
                </div>
               <div className="group">
               <ReactQuill theme="snow" value={value} onChange={setValue}/>
               </div>
               <div className="group">
               <textarea type="text" name="description" defaultValue={state.description} onChange={handleDescription}  className="group_control" placeholder="Post description" rows="20" cols="10" />
               </div>
              
           
        </div>
        </div>
        <div className="col-6 p-15">
        <div className="group">
                    <input type="text" name="slug" value={slug} onChange={handleUrl}  className="group_control" placeholder="Post Url" />
        </div>
        {slugButton ? (
           <div className="group">
          <input type="submit" 
                     
                     className="btn btn-default" onClick={slugHandle} value="Update Url" />
                </div>) : ""}

                <div className="group">
                    <div className="previewImage">
                    {previewImage ? (<img src={previewImage}/>) : " "}

                    </div>
                </div>

                <div className="group">
                <input type="submit" 
                     
                     className="btn btn-default btn-block" value="Create Post" />
                 
             </div>
            
        </div>
    </div>
    </form>
</div>
</div>
);
};
export default Create;