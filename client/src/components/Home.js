import React, { useEffect } from 'react';
import {useParams,Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {homeAction} from '../store/asyncAction/PostMethod'
import Loader from './Loader'
import Pagination from './Pagenation'
import moment from 'moment'
import ReactHtmlParser from 'react-html-parser';

const Home = () => {
let {page}=useParams()
if(page===undefined){
page=1
}
const dispatch=useDispatch()
const {loading}=useSelector(state=>state.PostReducer)
const {count,perPage,posts}=useSelector(state=>state.FetchPosts)
useEffect(()=>{
    dispatch(homeAction(page))
},[page])
console.log(page,perPage,posts,count)
return (
<div className="container">
<div className="row mt-100">
<div className="col-8 home" style={{marginBottom:"20px"}}>
{!loading ? posts.length> 0 ?posts.map(post=>(
<div className="row post-bg">
<div className="col-8">
<div className="post">
<div className="post_header">
<div className="post_header_avater">
    {post.userName[0]}
</div>
<div className="post_header_user">
<span>{post.userName}</span>
 <span>{moment(post.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</span> 
</div>
</div>
<div className="post_body">
    <h1 className="post_body_title">
    <Link to={`/details/${post._id}`} style={{textDecoration:"none",color:"grey"}}>{post.title}</Link>
    </h1>
  <div className="post_body_details">
      {ReactHtmlParser(post.body)}
  </div>
</div>
</div>
</div>
<div className="col-4">
    <div className="post_image">
    <img src={`/images/${post.image}`} alt="post image" />
    </div>
</div>
</div>
)) :'no Posts Remaining' : <Loader/>} 
</div>
<Pagination count={count} page={page} path='home' perPage={perPage} />
</div>

</div>
);
};

export default Home;