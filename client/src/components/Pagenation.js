import React from 'react';
import {Link} from 'react-router-dom'
const Pagenation = ({page,perPage,count,path}) => {
    let totalPages=Math.ceil(count/perPage);
    let loppStart=1;
    const links=()=>{
        const store=[];
        
        for(let i=1; i<=totalPages;i++){
             store.push(<li>
                 <Link to={`/${path}/${i}`}>{i}</Link>
             </li>)
        }
        return store;
    } 
    const next=()=>{
        if(page<totalPages){
            return (
              <li>  <Link to={`/${path}/${parseInt(page)+1}`}><i class="arrow fas fa-angle-double-right"></i></Link></li>
            )
        }
    }
    const previous=()=>{
        if(page > 1 && !page==0){
            return (
              <li>  <Link to={`/${path}/${parseInt(page)-1}`}><i class="arrow fas fa-angle-double-left"/></Link></li>
            )
        }
    }
    return (
        <div className="pagination col-12">
           
           {previous()} {links()}{next()}
            </div>
        
    );
};

export default Pagenation;