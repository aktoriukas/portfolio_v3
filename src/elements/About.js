import React, { Component } from 'react';
import photo from '../image/me_bw.jpg';
// import Svg from '../data/Svg';
import Database from '../data/Database';
// import Social from './Social';
import Skills from './Skills';

export default class About extends Component {
    render() {
        return (
            <section id='about'>
                <div className='container'>
                <h1 className='name-background'>Gediminas Strumila</h1>
                    <div className='intro'>
                        <h4>{Database.introduction}</h4>
                        <p>
                        {Database.about}
                    </p>
                    </div>
                    <div className='stats'>
                        <div className='personal'>
                            <div className='image'>
                                <img src={photo} alt='G.S'></img>
                            </div>
                            {/* <Social /> */}
                        </div>
                        <div className='spec'>
                            <Skills />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
