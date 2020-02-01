import React from 'react';
import PropTypes from 'prop-types';

import Loader from './Loader';
import DataTable from './DataTable';

class DataView extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            data: []
        }
    }

    async componentDidMount(){
        const response = await fetch(` http://www.filltext.com/?rows=22&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`);
        const data = await response.json();
        console.log(data);
        this.setState({
            isLoading: false,
            data: data,
        });
    }
    render(){
        return <div>
            {
                this.state.isLoading ? <Loader /> : <DataTable data={this.state.data}/>
            }
        </div>
        
    }
}

DataView.propTypes = {
    item_id: PropTypes.number.isRequired,
    users: PropTypes.array.isRequired
}

export default DataView;