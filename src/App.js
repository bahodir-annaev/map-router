import React from 'react';
import Map from './components/Map';
import SearchBox from './components/SearchBox';
import PointsList from './components/PointsList';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      points:[
      ]
    }
  }

  selectResult = (feature) => {
    this.setState((oldState) => {
      return {points: oldState.points.put(feature)}
    })
  }

  render(){
    return (
      <div id="container">
        <SearchBox  selectResult={this.selectResult}/>
        <PointsList points={this.state.points} />
        <div id="mapContainer">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
