import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      apiData: []
    }

    // this.fetchApiData = this.fetchApiData.bind(this)
  }

  // fetchApiData(arg){
  //   axios.get(`https://swapi.co/api/people/${arg}`)
  //   .then(response => {console.log(response)
  //   })
  //   .then(data => {this.setState({apiData: data})
  //   })
  //   .catch(e => {console.error("fetch error" + e)
  // })
  // }

  componentWillMount(){
    axios.get(`https://swapi.co/api/people/3`)
    .then(response => {console.log(response); return response;
    })
    .then(data => {this.setState({apiData: data})
    })
    .catch(e => {console.error("fetch error" + e)
  })
  }

  render() {
    // this.fetchApiData(51)
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <h2>React Redux Router</h2>
        {/* <button onClick={() => this.fetchApiData(57)}>Char information</button> */}
        {/* {this.state.apiData.map((data, index) => (
          <div key={index}>
            <div>{data[0]}</div>
          </div>
        ))} */}
        {console.log(this.state.apiData.data)}
        <div>{this.state.apiData.data.name}</div>
      </div>
    );
  }
}
