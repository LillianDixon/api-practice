import React, { Component } from 'react';

export default class FetchApiCaller extends Component {
    constructor(props) {
        super(props)

        this.state = {
            people: []
        }
    }

    componentWillMount() {
        fetch('https://swapi.co/api/people/?page=2', {
            method: 'GET',
            headers: {
                "accept": "application/json",
                'Content-Type': 'application/json'
            }
        })
        .then(response => {return response.json();})
        .then(responseData => {console.log(responseData); return responseData;})
        .then(data => {this.setState({people: data.results});})

        .catch(err => {
            console.log("fetch error" + err)
        });
    }

  render() {
    return (
      <div>
        {this.state.people.map((item,i) => (
        <div key={i}>
            <div>{item.name}</div>
            <a href={item.species}>Species Link</a>
            {console.log(item)}
        </div>))}
      </div>
    );
  }
}