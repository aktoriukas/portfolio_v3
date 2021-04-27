import React, {useEffect} from 'react'
import database from '../data/Database'
import TypeIt from "typeit";

export default function Projects() {
    useEffect(() => {
        
        new TypeIt("#new-projects", {
            strings: ['my new project: { stack: anything! }'],
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
                            <span className='code-green'>img:</span> 
                            [
                            <span 
                                onClick={() => console.log('focus')}
                                
                            >
                                {project.img.map((image, idx) => (
                                    <span className='single-img' key={idx}>
                                        <span>{` image `}</span>
                                    </span>
                                ))}
                            </span>
                        ]
                        <br></br>
                        </span>

                        :
                        ` `
                        }

                        {project.video ? 
                        <span className='line ind-1 video-container'>vid: [
                            {project.video.map((vid, idx) => (
                                <span className='single-video' key={idx}>
                                    <span>{` video `}</span>
                                    <video playsInline autoPlay loop>
                                        <source src={vid} type='video/mp4'/>
                                    </video>
                                </span>
                            ))}
                        ]
                        <br></br>
                        </span>

                        :
                        ` `
                        }
                        
                        {project.url ? 
                        <span className='line ind-1 link-container'>
                            {`link: `}
                            <a className='code-el' href={project.url}>url</a>
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



            <h2>{`</projects>`}</h2>
            
        </div>
    )
}
