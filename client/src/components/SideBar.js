import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar_container">
            <div className="sidebar_container_item">
                <div className="profile">
                <Link to="/username">Change Name</Link>
                </div>
                <div className="profile">
                <Link to="">Change Password</Link>
                </div>
            </div>
        </div>
    );
};

export default SideBar;