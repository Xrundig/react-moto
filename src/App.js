import React from 'react';
import './App.css';
import Detail from './Detail'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      showPicture: false,
      partBike:''
    }
  }
  checkForward(event){
    this.setState(prevstate => {
        return{
          showPicture: !prevstate.showPicture
        }
      })
    this.setState({partBike: event.target.className})
    event.stopPropagation();
  }

  removeDetail(){
    this.setState({showPicture: false});
  }

  pressEsc(event){
    event.key === "Escape" && this.setState({showPicture: false});
  }
  render(){
    return (
      <div className="main-picture" onClick={this.removeDetail.bind(this)} onKeyDown={this.pressEsc.bind(this)} tabIndex="0">
        <div className="moto">
            <div className = "moto-forward" onClick={this.checkForward.bind(this)}></div>
            <div className = "moto-center" onClick={this.checkForward.bind(this)}></div>
            <div className = "moto-aft" onClick={this.checkForward.bind(this)}></div>
        </div>
        {this.state.showPicture && <div className="overlay"></div>}
        {this.state.showPicture && <Detail partBike={this.state.partBike}/>}
      </div>
    );
  }
}

export default App;
