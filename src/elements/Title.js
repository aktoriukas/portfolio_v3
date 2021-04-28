import React, {useEffect} from 'react'
import TypeIt from "typeit";

export default function Title() {

    useEffect(() => {
        
        new TypeIt("#hello", {
            speed: 95,
            loop: false,
            waitUntilVisible: false
          }).go();
    }, [])

    return (
        <div className='container-lg welcome-page'>
            <h1 id='hello'>
                Hi,
                my name is Gediminas
            </h1>
        </div>
    )
}
