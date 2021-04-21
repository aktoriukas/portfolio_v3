import React from 'react'
import img_react from '../icons/technologies/reactjs.svg'
import img_axios from '../icons/technologies/axios.svg'
import img_figma from '../icons/technologies/figma.svg'
import img_bootstrap from '../icons/technologies/bootstrap.svg'
import img_javascript from '../icons/technologies/javascript.svg'
import img_mysql from '../icons/technologies/mysql.svg'
import img_nodejs from '../icons/technologies/nodejs.svg'
import img_npmjs from '../icons/technologies/npmjs.svg'
import img_php from '../icons/technologies/php.svg'
import img_redux from '../icons/technologies/redux.svg'
import img_sass from '../icons/technologies/sass.svg'
import img_wordpress from '../icons/technologies/wordpress.svg'



export default function Technologies() {
    return (
        <div className='technologies-container'>
            <div className='carousel'>
                <img src={img_react} />
                <img src={img_axios} />
                <img src={img_figma} />
                <img src={img_bootstrap} />
                <img src={img_javascript} />
                <img src={img_nodejs} />
                <img src={img_npmjs} />
                <img src={img_mysql} />
                <img src={img_php} />
                <img src={img_redux} />
                <img src={img_sass} />
                <img src={img_wordpress} />
            </div>
        </div>
    )
}
