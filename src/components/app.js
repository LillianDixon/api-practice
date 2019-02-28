import React, { Component } from 'react';
import ApiCaller from "./appcall"
import FetchApiCaller from "./fetchcall"
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      apiData: []
    }

    this.fetchApiData = this.fetchApiData.bind(this)
  }

  fetchApiData(arg) {
    axios.get(`https://swapi.co/api/people/${arg}`)
    .then(response => {console.log(response) 
    })
    .then(data => {this.setState({apiData: data})
    })
    .catch(e => {console.error("Fetch error" + e)
  })
  }


  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
        <button onClick={() => this.fetchApiData(3)}>Char information</button>
        <ApiCaller />
        <FetchApiCaller />
      </div>
    );
  }
}