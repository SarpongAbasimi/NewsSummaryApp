import React from 'react';
import { apiKey } from '../config';
import { News } from '../components/news';
import { fetchData } from '../components/apicall';

export class Body extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount(){
    const uri = apiKey.guardian;
    return fetchData(uri, this)
  }

  render(){
    return(
      <div>
      <News data={this.state.list}/>
      </div>
    );
  }
}


