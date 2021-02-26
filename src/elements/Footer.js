import React, { Component } from 'react'
import Social from './Social';
import Img from '../image/dark-brick-wall.jpg'


export default class Footer extends Component {
    render() {
        return (
            <section id='footer'>
                <div className='background-img-container'>
                    <div className='filter' />
                    <img className='img' src={Img} alt='brick-wall' />
                </div>
                <div className='triangle'></div>
                <Social />
                <div className='footnote'>
                    G.S.<strong>©2020-2021</strong>
                </div>
            </section>
        )
    }
}
