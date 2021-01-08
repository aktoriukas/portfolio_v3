import Welcome from './elements/Welcome';
import Header from './elements/Header';
import Body from './elements/Body';

import React, { Component } from 'react'

  export default class App extends Component {
    constructor(props) {
      super(props)

      this.state = {
          scrolled: false,
          cursor: 0,
      }

      this.handleScroll = this.handleScroll.bind(this)
      // this.cursorOut = this.cursorOut.bind(this);
      // this.cursorOver = this.cursorOver.bind(this);
  }
  isInViewport = function (elem) {

      let bounding = elem.getBoundingClientRect();
      return (
          bounding.top < 500
      );
  };
  componentDidMount () {
      window.addEventListener('scroll', this.handleScroll);
      // window.addEventListener("mousemove", this.animation);
      // let a = document.querySelectorAll('a');
      // a.forEach(item => (
      //   item.addEventListener('mouseover', this.cursorOver)
      // ))
      // a.forEach(item => (
      //   item.addEventListener('mouseout', this.cursorOut)
      // ))
  }
  // cursorOver () {
  //   this.setState({
  //     cursor: 1
  //   })

  // }
  // cursorOut () {
  //   this.setState({
  //     cursor: 0
  //   })
  // }
  animation (e) {
    let cursor = document.querySelector('#cursor');
    cursor.style.top = e.pageY - 10 + "px";
    cursor.style.left = e.pageX - 15 + "px";
  }
  handleScroll(e) {

    let body = document.getElementById('body');
    let scrolled = this.isInViewport(body)? true : false;
    let app = document.getElementsByClassName('App')
    if (scrolled) {
      app[0].classList.add('scrolled')
    }else {
      app[0].classList.remove('scrolled')
    }
  }
  render() {
    return (
      <div className={this.state.scrolled === false? 'App ' : 'App scrolled'}>
        <Welcome 
          scrolled={this.state.scrolled}
        />
        <Header />
        <Body 
        />
        {/* <span id='cursor' className={this.state.cursor === 0 ? '' : 'over'}></span> */}
      </div>
    )
  }
}
