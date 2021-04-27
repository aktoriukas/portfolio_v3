import React, {useEffect} from 'react'
import TypeIt from "typeit";

export default function Title() {

    useEffect(() => {
        
        new TypeIt("#hello", {
            speed: 65,
            loop: false,
            waitUntilVisible: true
          }).go();
    }, [])

    return (
        <div className='container-lg welcome-page'>
            <h1 id='hello'>
                Hi, <br></br>
                I'm Gediminas,<br></br>
                Web Developer
            </h1>
        </div>
    )
}
