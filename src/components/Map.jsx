import React from 'react';
import ymaps from 'ymaps';

class Map extends React.Component {

  shouldComponentUpdate(){
    return false;
  }

  componentWillReceiveProps(newProps){
    this.redrawMapElements(newProps);
  }

  componentDidMount(){
      ymaps.load('//api-maps.yandex.ru/2.1/?apikey=c482b511-62ce-4670-81bc-a939803b2504&lang=en_US')
      .then(ymap => {
        this.map = new ymap.Map('map',{center: [0, 0],
          zoom: 1,});
      })
      .catch(error => console.log('Failed to load Yandex Maps', error));    
  }

  redrawMapElements(newProps){
    if(this.map){
      // put markers and route based on props.
    }
  }

  render(){
    return (
      <div id="map" style={{width:'100%', height: '100%'}}>
      </div>
    );
  }
}

export default Map;
