import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useParams} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import {fetchPosts} from '../store/asyncAction/PostMethod'
import Loader from './Loader';
import SideBar from './SideBar';
import Pagenation from './Pagenation';
import { SET_MESSAGE } from '../store/types/PostTypes';

const Dashboard = () => {
    const {redirect,message,loading}=useSelector(state=>state.PostReducer)
    const {posts,count,perPage}=useSelector(state=>state.FetchPosts)
    const {user:{_id},token}=useSelector(state=>state.AuthReducer)
   // console.log(_id);
   let {page}=useParams();
   
    const dispatch=useDispatch()
    useEffect(()=>{
        if(redirect){
            dispatch({type:"REDIRECT_FALSE"})
        }
        if(message){
            toast.success(message)
            dispatch({type:"REMOVE_MESSAGE"})
        }
       // dispatch(fetchPosts(_id))
    })
    if(page===undefined){
        page=1;
    }

    const deletePost=async(id)=>{
        const confirm=window.confirm("Are you sure to delete post")
        if(confirm){
               try {
                   dispatch({type:"SET_LOADER"})
                   const config={
                    headers:{
                      authorization:`Bearer ${token}`
                    }
                  }
                   const {data:{msg}}=await axios.get(`/delete/${id}`,config)
                   dispatch(fetchPosts(_id,page));
                   dispatch({type:SET_MESSAGE,payload:msg});
               } catch (error) {
                dispatch({type:"CLOSE_LOADER"})
               }
        }
    }
    useEffect(() => {
        
		dispatch(fetchPosts(_id,page));
	}, [page]);
    return (
       <div className="container mt-100" style={{padding:"2rem 1rem"}}>
          
                  <Toaster/>
                  <div className="row">
                      <div className="col-3">
                          <h1 style={{textAlign:"center",marginBottom:"20px"}}>User Profile</h1>
                          <SideBar></SideBar>
                          
                        </div>
                      <div className="col-1"></div>
                      <div className="col-7">
                      <h1 style={{textAlign:"center"}}>User Post By YourSelf</h1>
                          {!loading ? (posts.length > 0 ?
                          ( posts.map(post=> (<div className="dashboard_post"> 
                                 <div className="post_title" key={post._id}>
                                     <div className="title">
                                     <h1><Link to="/">{post.title}</Link></h1>
                                     </div>
                                     <div className="icon">
                                     <Link Link to={`/updateImage/${post._id}`}><i class="icon fas fa-images"></i></Link> 
                                       
                                    <Link Link to={`/edit/${post._id}`}><i class="icon fas fa-edit"></i></Link> 
                                    <Link Link to="/" onClick={()=> deletePost(post._id)}><i class="icon fas fa-trash"></i></Link> 
                                   
                                     </div>
                                     </div>
                           </div>)
                            
                            ))
                          : ("<h1>You dont any posts</h1>")) :(<Loader></Loader>)}
                             
                      </div>
                      <Pagenation page={page} path='dashboard' count={count} perPage={perPage}/>
                  </div>
                 

           </div>
        
    );
};

export default Dashboard;