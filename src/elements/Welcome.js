import React, { Component } from 'react';
import Cube from './Cube';


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
                    <h1>Welcome</h1>
                    <Cube 
                        scrolled={this.props.scrolled}
                    />
                </div>
            </section>
        )
    }
}
