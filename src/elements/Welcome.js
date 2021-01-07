import React, { Component } from 'react';
import Cube from './Cube';
import BackgroundSlice from './BackgroundSlice'


export default class Welcome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             inView: true
        }
    }
    
    render() {
        return (
            <section id='welcome-screen'>
                <div className='about'>
                    <div id='header-container'>
                        <h1>Welcome</h1>
                        <span className='bottom'></span>
                        <span className='right'></span>
                        <span className='top'></span>
                        <span className='left'></span>
                    </div>
                    {/* <Cube 
                        scrolled={this.props.scrolled}
                    /> */}
                    <BackgroundSlice />
                </div>
            </section>
        )
    }
}
