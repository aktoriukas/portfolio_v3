import React, {useEffect} from 'react'
import database from '../data/Database'
import TypeIt from "typeit";


export default function Technologies() {

    useEffect(() => {
        window.scrollTo(0, 0);
        new TypeIt("#about", {
            strings: database.about,
            speed: 65,
            loop: false,
            waitUntilVisible: true
          }).go();
    }, [])




    return (
        <div className='container-lg technologies'>

            <div className='row'>

                <div className='terminal col-12 col-lg-6'>

                    <div className='body'>
                        <div className='row'>
                            <div className='col-12'>
                                <span className='code-green'>gediminas@pc</span>
                                <span>:</span>
                                <span className='code-pink'>~</span>
                                <span>$ dpkg -l</span>
                            </div>
                            <div className='col-12'>
                                =========================
                            </div>
                            <div className='col-12 skills'>
                                {database.skills.map(skill => (
                                    <div className='skill' key={skill}>{skill}</div>
                                ))}
                            </div>
                            <div className='col-12'>
                                <span className='code-green'>gediminas@pc</span>
                                <span>:</span>
                                <span className='code-pink'>~</span>
                                <span className='blinker'>$</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6 about'>
                        <h1 id='about'></h1>
                </div>
            </div>


        </div>
    )
}
