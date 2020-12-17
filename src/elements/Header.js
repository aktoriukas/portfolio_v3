import React, { Component } from 'react';
import Cube from './Cube';

export default class Header extends Component {
    render() {
        return (
            <header id='header'>
                <Cube />
                <ul className='menu'>
                    <li>
                        <a>
                            about
                        </a>
                    </li>
                    <li>
                        <a>
                            projects
                        </a>
                    </li>
                </ul>
            </header>
        )
    }
}
