import React from 'react';
import Point from './Point';

class PointsList extends React.Component {

  render(){
    return (
      <div>
        {
          this.props.points.map( (point, key) => { return <Point key={key} point={point}/> } )
        }
      </div>
    );
  }
}

export default PointsList;