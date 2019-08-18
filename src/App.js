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
        {name: 'point1'},
        {name: 'point2'}
      ]
    }
  }

  render(){
    return (
      <div id="container">
        <SearchBox />
        <PointsList points={this.state.points} />
        <div id="mapContainer">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
