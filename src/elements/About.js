import React from 'react'
import Database from '../data/Database';

export default function About() {
    return (
        <div>
            <h3>
                {Database.about}
            </h3>
        </div>
    )
}
