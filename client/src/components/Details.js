import React, { useEffect, useState } from 'react';
import {useParams,Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {detailsAction} from '../store/asyncAction/PostMethod'
import {postComment} from '../store/asyncAction/PostMethod'
import Loader from './Loader';
import moment from 'moment'
import ReactHtmlParser from 'react-html-parser';
import Comment from './Comment'
const Details = () => {
    const {id}=useParams()
    const dispatch=useDispatch()
    const {user}=useSelector(state=>state.AuthReducer)
    const{loading,details,comments}=useSelector(state=>state.PostReducer)
    const {title,body,userName,description,image,slug,createdAt,updatedAt,_id}=details
    console.log(details)
    useEffect(()=>{
        dispatch(detailsAction(id))
    },[])
    const [comment,setComment]=useState()
   const handleComment=(e)=>{
       e.preventDefault()
       console.log(comment);
       dispatch(postComment({
        comment,
        id:_id,
       userName,
       }))
       dispatch(detailsAction(id))
   }

    return (
        <div className="container">
            <div className="row mt-100">
                {!loading?<div className="col-9 post_details">
                <div className="post_header">
<div className="post_header_avater">
    { userName? userName.charAt(0) :''}
</div>
<div className="post_header_user">
<span>{userName}</span>
 <span>{moment(updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</span> 
</div>
</div> 
<div className="post_body">
    <h1 className="post_body_title">
       
    <Link style={{textDecoration:"none",color:"Black"}}>{title}</Link>
    </h1>
    <div>
    <span>{slug}</span>
    </div>
  <div className="post_body_details" style={{textDecoration:"none",color:"grey"}}>
      {ReactHtmlParser(body).slice(0,100)}
  </div>
  <div className="post_body_details">
      {ReactHtmlParser(description)}
  </div>
</div>
<div className="post_image" style={{width:"100%",height:"50%"}}>
    <img src={`/images/${image}`} style={{width:"100%",height:"50%",objectFit:"cover",marginBottom:"20px"}} alt="post image" />
    
    {user ?<div className="post_comment"> 
    <>
             <form onSubmit={handleComment}>
             <div className="group">
                    <input type="text" onChange={(e)=>setComment(e.target.value)}  className="group_control" style={{marginBottom:"20px"}} placeholder="Write your comment" />
                    <input type="submit" className="btn btn-default" value="Send Comment" />
                </div>
             </form>
             <Comment comments={comments}/>
             </>
            </div>:''}
    </div>
   
 </div>
 
 
 : <Loader/>}
            </div>

        </div>
    );
};

export default Details;