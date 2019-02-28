import React, { Component } from 'react';
import axios from 'axios';

export default class ApiCaller extends Component {
    constructor(props) {
        super(props)

        this.state = {
            chars: []
        }
    }

    componentWillMount() {
        axios.get('https://swapi.co/api/people/1')
        .then(res => {
            const chars = res.data;
            this.setState({ chars });
          })
        .catch(err => {
            console.log("fetch error" + err)
        });
    }

  render() {
    return (
      <div>
        {console.log(this.state.chars)}
        {console.log(this.state.chars.name)}
        <h1>{this.state.chars.name}</h1>
      </div>
    );
  }
}