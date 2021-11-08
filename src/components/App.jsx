import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            coffee: [],
        };
    }
componentDidMount(){
    this.get_All_Coffee();
}

async get_All_Coffee(){
    let response = await axios.get('http://127.0.0.1:8000/api/coffee/all/');
    this.setState({
        coffee: response.data
    });
    console.log(response.data)

}


    render() {
        return (
            <h1>Valhalla Coffee Company</h1>
        )
    }
}

export default App;