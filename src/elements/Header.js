import React, { Component } from 'react';
import Cube from './Cube';

export default class Header extends Component {
    render() {
        return (
            <header id='header'>
                <Cube />
                <ul className='menu'>
                    <li>
                        <a href='#about'>
                            about
                        </a>
                    </li>
                    <li>
                        <a href='#projects'>
                            projects
                        </a>
                    </li>
                </ul>
            </header>
        )
    }
}
