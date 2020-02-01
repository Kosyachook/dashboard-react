import React from 'react';

import Sidebar from '../components/sidebar/Sidebar';
import '../components/Layout.css';
import DataView from '../components/dataview/DataView';

const Home = (props)=>(
    <div className="Layout">
            <Sidebar />
            <div className="MainView">
                <h1>{props.main}</h1>
                <DataView />
            </div>
        </div>
);

export default Home;