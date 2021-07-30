import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
const Navbar = () => {
    const {user}=useSelector(state=> state.AuthReducer)
    const dispatch=useDispatch()
   const logout=()=>{
       localStorage.removeItem('myToken')
       dispatch({type:"LOGOUT"})
   }
    const Links= user ? (  <div className="navbar_right">
    <li><Link>{user.name}</Link></li>
    <li><Link to="/create">Create Post</Link></li>
    <li><Link to="/" onClick={logout}>Logout</Link></li>
</div>): (                    <div className="navbar_right">
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </div>)
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar_row">
                    <div className="navabr_left">
                        <Link to="/"><img src="images/logo1.png" alt="" /></Link>
                    </div>
                    {Links}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;