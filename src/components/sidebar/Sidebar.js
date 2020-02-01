import React from 'react';
import {Link} from 'react-router-dom';

import '../Layout.css';

const Sidebar = (props) => (
    <div className="Sidebar">
        <nav>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
        </nav>
    </div>
);

export default Sidebar;