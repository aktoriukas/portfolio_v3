import Welcome from './elements/Welcome';
import Header from './elements/Header';
import Body from './elements/Body';

import React, { Component } from 'react'

  export default class App extends Component {
    constructor(props) {
      super(props)

      this.state = {
          scrolled: false
      }

      this.handleScroll = this.handleScroll.bind(this)
  }
  isInViewport = function (elem) {

      var bounding = elem.getBoundingClientRect();
      return (
          bounding.top < 500
      );
  };
  componentDidMount () {
      window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
      let body = document.getElementById('body');
      let scrolled = this.isInViewport(body)? true : false;
      this.setState({
          scrolled: scrolled
      })
  }
  render() {
    return (
      <div className={this.state.scrolled === false? 'App' : 'App scrolled'}>
        <Welcome 
          scrolled={this.state.scrolled}
        />
        <Header />
        <Body 
        />
      </div>
    )
  }
}
