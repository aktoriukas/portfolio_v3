import React, { Component } from 'react';
import Database from '../data/Database';

export default class Social extends Component {
    render() {
        return (
            <ul>
                {Database.socialMedia.map((media) => (
                    <a key={media.id} href={media.url} rel='noopener noreferrer' target='_blank'>
                        <img alt={media.title} className='logo' src={media.logo}></img>
                    </a>
                ))}
            </ul>

        )
    }
}
