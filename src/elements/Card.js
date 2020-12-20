import React, { Component } from 'react';

export default class Card extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.project.id,
             position: 0
        }
    }

    
    render() {
        let link;
        if (this.props.project.url) {
            link = <a href={this.props.project.url} target='_black'>
            </a>
        }
        
        // console.log(`title: ${this.props.project.title} position: ${this.state.position}`)
        return (
            <li className={`card-background`}>
                <div className={`card ${this.props.project.ref}`}>
                    <h4 className='title'>{this.props.project.title}</h4>
                    <ul className='stack'>
                        <div className='stack-icon'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {this.props.project.stack.map(item => (
                        <li key={item}>{item}</li>
                    ))}</ul>
                    <p className='about-project'>{this.props.project.info}</p>
                    <span className='website'>
                        {link}
                    </span>
                </div>
            </li>
)
    }
}
