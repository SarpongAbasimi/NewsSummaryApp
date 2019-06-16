export const fetchData = (uri, that)=> {
  fetch(uri)
  .then(response => {
    if(response.ok){
      return response.json()
    }
      throw new Error ('Failed Request')
  }, networkError => console.log(networkError.message))
  .then(response => response.response.results.map(eachData=>eachData))
  .then(list => that.setState({list}))
}