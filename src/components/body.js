import React from 'react';
import { apiKey } from '../config';
import { News } from '../components/news';
//import { apiCall } from '../components/apicall';

export class Body extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount(){
    const uri = apiKey.guardian;
    fetch(uri)
    console.log('fecthing.......')
    .then(response => {
      if(response.ok){
        return response.json()
      }
      throw new Error ('Failed Request')
    }, networkError => console.log(networkError.message))
    .then(response=> response.response.results.map(eachData=>eachData))
    .then(list => this.setState({list}))
  }

  render(){
    return(
      <div>
      <News data={this.state.list}/>
      </div>
    );
  }
}


