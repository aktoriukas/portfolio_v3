import Database from '../data/Database';
import img_me from '../image/me_bw.jpg'
import React from 'react'

export default function Welcome() {
    return (
        <section id='about' className='col-12 col-lg-8'>
            <div className='about-container'>
                <h2>{Database.introduction}</h2>
                <a href='#' className='btn red mt-4'>contact me</a>
            </div>
            <img className='avatar' src={img_me} />
        </section>
    )
}
