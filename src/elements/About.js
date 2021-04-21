import React from 'react'
import Database from '../data/Database';

export default function About() {
    return (
        <div className='about-inner'>
            <h3>
                {Database.about}
            </h3>
        </div>
    )
}
