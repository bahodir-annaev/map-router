import React from 'react';
import { searchLocations } from '../services';

class SearchBox extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      results: []
    }
  }

  searchTimeout = null;

  handleChange = () => {
    if(this.input.value.trim() === ''){
      this.clearSearch();
    }else{
      if(this.searchTimeout) clearTimeout( this.searchTimeout );
      this.searchTimeout = setTimeout(this.doSearch, 1000);
    }
  }

  doSearch = () => {
    searchLocations(this.input.value)
      .then((response, error) => {
        if(error)
          alert(error.message);
        else
          this.setState({results: response.features});
      })
  }

  render(){
    return (
      <div>
        <input ref={searchInput => this.input = searchInput} onChange={ this.handleChange } />
        <div>
          {
            this.state.results.map( (feature, key) => {
              return (<div key={key} onClick={() => { this.props.selectResult(feature) } } > {feature.name} </div>)
            })
          }
        </div>
      </div>
    );
  }
}

export default SearchBox;