import React, { Component } from 'react'
import Social from './Social';

export default class Footer extends Component {
    render() {
        return (
            <section id='footer'>
                <div className='triangle'></div>
                    <Social />
                    <div className='footnote'>
                        Gediminas Strumila<strong>©2020</strong>
                    </div>
            </section>
        )
    }
}
