import React, {useEffect, useState} from 'react'
import database from '../data/Database'
import TypeIt from "typeit";
import Carousel from './Carousel'

export default function Projects() {

    const [carousel, setCarousel] = useState(false)

    useEffect(() => {
        
        new TypeIt("#new-projects", {
            strings: ['project: { stack: anything! }'],
            speed: 155,
            loop: true,
            waitUntilVisible: true
          }).go();
    }, [])


    return (
        <div className='container-lg code-sandbox'>

            <h2>{`<projects>`}</h2>

            <div className='code-sandbox-inner'>
                
                {database.projects.map(project => (
                    <p key={project.id}>
                        <span><strong className='line'>{project.title}{`:{`}</strong></span>
                        <br></br>
                        <span className='line ind-1'>
                            <span className='code-blue'>info: </span> 
                            '{project.info}'
                        </span>
                        <br></br>
                        <span className='ind-1 stack'>stack: [
                            {project.stack.map((el, idx) => (
                                <span className='code-pink' key={idx}>{` ${el} `}</span>
                            ))}
                        ]
                        </span>
                        <br></br>

                        {project.img ? 
                        <span className='line ind-1 img-container'>
                            <span className='code-green'>img: </span> 
                            [
                                {project.img.map((image, idx) => (
                                    <span 
                                    onClick={() => setCarousel(project.img)}
                                    className='single-img' 
                                    key={idx}>
                                        <span>{` image `}</span>
                                    </span>
                                ))}
                            ]
                            
                        <br></br>
                        </span>

                        :
                        ` `
                        }

                        {project.video ? 
                        <span className='line ind-1 video-container'>vid: [
                            {project.video.map((vid, idx) => (
                                <span 
                                    onClick={() => setCarousel(project.video)}
                                    className='single-video' key={idx}>
                                    <span>{` video `}</span>
                                </span>
                            ))}
                        ]
                        <br></br>var
                        </span>

                        :
                        ` `
                        }
                        
                        {project.url ? 
                        <span className='line ind-1 link-container'>
                            {`link: `}
                            <a target="_blank" className='code-el' href={project.url}>url</a>
                        </span>
                        :
                        ''
                        }
                        
                        <br></br>
                        <span className='line'>{`}`}</span>
                    </p>
                ))}
                <p>
                    <span id='new-projects' className='line'>
                    </span>
                </p>
            </div>

            {carousel ? <Carousel data={carousel} setCarousel={setCarousel} /> : ''}

            <h2>{`</projects>`}</h2>
            
        </div>
    )
}
