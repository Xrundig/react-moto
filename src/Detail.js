import React from 'react'
import MotoText from './MotoText'

class Detail extends React.Component{
  stopDelegate(event){
    event.stopPropagation();
  }
  render(){
    let picturePart ='./' + this.props.partBike + '.jpg';
    return(
      <div className="detail" onClick={this.stopDelegate} >
        <img src={picturePart} className="detail-picture" alt={this.props.partBike}/>
        <MotoText partBike={this.props.partBike}/>
      </div>
    )
  }
}

export default Detail
