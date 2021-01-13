import React, { Component } from 'react';

export default class Card extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             id: this.props.project.id,
             position: 0,
             open: false
        }
        this.openProject = this.openProject.bind(this)
    }
    openProject() {
        this.setState({ open: true})
    }
    
    render() {
        let link, images;
        const { open } = this.state
        const { img, ref, title, info, url, stack } = this.props.project
        if (url) {
            link = <a href={url} target='_black'>
            </a>
        }
        if(img){
            images = img.map((im) => {
                return <div className='container'><img key={im} src={im}></img></div>
            })    
        }
        return (
            <li onClick={this.openProject} className={`card-background`}>
                <div className={`card ${ref} ${open ? 'open': ''}`}>
                    <h4 className='title'>{title}</h4>
                    <ul className='stack'>
                        <div className='stack-icon'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {stack.map(item => (
                        <li key={item}>{item}</li>
                    ))}</ul>
                    <p className='about-project'>{info}</p>
                    <span className='website'>
                        {link}
                    </span>
                </div>
            </li>
        )
    }
}
