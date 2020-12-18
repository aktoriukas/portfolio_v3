import React, { Component } from 'react';

export default class Card extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.project.id,
             left: 0,
             position: 0
        }
    }
    componentDidMount () {
        let {project, middleCard} = this.props;

        if (middleCard == project.id) {
            this.setState({
                position: 0
            })
        }
    }
    
    render() {
        let link, position;
        if (this.props.project.url) {
            link = <a>link</a>
        }
        console.log(this.state.position)
        position = this.state.position > 0 ? 'right' : 'left';
        return (
            <li className={`card ${this.props.project.ref} ${position}`}
                style={{left: this.state.left + 'px'}}
            >
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
            </li>
)
    }
}
