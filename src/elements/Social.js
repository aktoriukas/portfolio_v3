import React, { Component } from 'react';
import Database from '../data/Database';

export default class Social extends Component {
    render() {
        return (
            <ul className='social-media'>
                {Database.socialMedia.map((media) => (
                    <li key={media.id}>
                    <a  href={media.url} rel='noopener noreferrer' target='_blank'>
                        <img alt={media.title} className='logo' src={media.logo}></img>
                    </a>
                    </li>
                ))}
            </ul>

        )
    }
}
