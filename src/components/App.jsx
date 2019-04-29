import React, { Component } from 'react';
import Map from './map/Map';
import Sidebar from './sidebar/Sidebar';

import '../styles/app.less';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/features').then((res) => {
      return res.json();
    }).then((data) => {
      this.setState({
        list: data.features
      })
    }).catch((reject) => {
      console.error('Failed to getting data', reject)
    });
  }


  render() {
    return (
      <div className='wrapper'>
        <Sidebar list={this.state.list} />
        <Map />
      </div>
    );
  }
}

export default App;
