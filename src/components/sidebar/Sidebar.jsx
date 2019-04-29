import React, { Component } from 'react';
import User from '../user/User';

import './sidebar.less';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
      updated: false
    }
  }

  componentDidUpdate() {
    if (this.props.list && !this.state.updated) {
      this.setState({
        list: this.setListProperties(),
        updated: true
      });
    }
  }

  setListProperties = () => {
    return this.props.list.map((el) =>
          <User info={el.properties} />
        );
  };

  render() {
    return (
      <ul className='sidebar'>{this.state.list}</ul>
    )
  }
}

export default Sidebar;
