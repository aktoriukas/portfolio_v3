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
        let link, images;
        const { open } = this.state
        const { img, ref, title, info, url, stack } = this.props.project
        if (url) {
            link = <a href={url} target='_black'>
                        <div className='protocol'>https://</div>
                        <div className='site'>{url.slice(8, -1)}</div>
                   </a>
        }
        if(img){
            images = img.map((im) => {
                return <div key={im} className='container'><img src={im}></img></div>
            })    
        }
        return (
            <li className={`card-background ${ref}`}>
                <div className={`card ${open ? 'open': ''}`}>
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
                <div className='images'>
                    {images}
                </div>
            </li>
        )
    }
}
