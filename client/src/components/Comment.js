import React from 'react';
import moment from 'moment';

const Comment = ({comments}) => {
    console.log(comments);
    return comments.length > 0 ? comments.map((comment)=>(
            <div className="">
            <div className="post_header">
<div className="post_header_avater">
    {comment.UserName ? comment.UserName[0]:''}
</div>
<div className="post_header_user">
<span>{comment.UserName}</span>
 <span>{moment(comment.updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</span> 
</div>
</div>
<div className="post_body_details" style={{marginLeft:'4rem',borderBottom:"1px dotted grey",padding:'1rem',fontSize:'1.4rem'}}>
      {comment.comment}
  </div>
</div>
        )) :'no comment available.write comment and be the first commenter'
        
    
};

export default Comment;