import React from 'react'
import Database from '../data/Database'

export default function Projects() {
    return (
        <div className='row'>
            {Database.projects.map(project => {
                return (
                    <div className='card col-10 col-lg-5'>
                        <h3>{project.title}</h3>
                        <div className='hidden'>


                            <p>{project.info}</p>
                            {project.url ? 
                            <a href={project.url}>{project.url}</a>
                            :
                            ''
                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
