import React from 'react'
import database from '../data/Database'

export default function Projects() {
    return (
        <div className='container-lg code-sandbox'>

            <h2>{`<projects>`}</h2>

            <div className='code-sandbox-inner'>
                
                {database.projects.map(project => (
                    <p key={project.id}>
                        <span><strong className='line'>{project.title}{`:{`}</strong></span>
                        <br></br>
                        <span className='line ind-1'>info: '{project.info}'</span>
                        <br></br>
                        <span className='ind-1 stack'>stack: [
                            {project.stack.map((el, idx) => (
                                <span key={idx}>{` ${el} `}</span>
                            ))}
                        ]
                        </span>
                        <br></br>

                        {project.img ? 
                        <span className='line ind-1 img-container'>img: [
                            {project.img.map((image, idx) => (
                                <span className='single-img' key={idx}>
                                    <span>{` image `}</span>
                                    <img src={image}/>
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
                            <a href={project.url}>url</a>
                        </span>
                        :
                        ''
                        }
                        
                        <br></br>
                        <span className='line'>{`}`}</span>
                    </p>
                ))}
            </div>


            <h2>{`</projects>`}</h2>
            
        </div>
    )
}
