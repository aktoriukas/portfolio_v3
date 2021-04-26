import React from 'react'
import database from '../data/Database'

export default function Social() {
    return (
        <div className='social-media'>
            {database.socialMedia.map(media => (
                <a target='_black' href={media.url} key={media.id}>
                    <img src={media.logo} />
                </a>
            ))}
        </div>
    )
}
