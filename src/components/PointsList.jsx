import React from 'react';
import Point from './Point';

class PointsList extends React.Component {

  render(){
    return (
      <div>
        {
          this.props.points.map( point => { return <Point point={point}/> } )
        }
      </div>
    );
  }
}

export default PointsList;