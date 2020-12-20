import React, { Component } from 'react'
import Database from '../data/Database';
import Card from './Card';

export default class Projects extends Component {

    render() {
        return (
            <section id='projects'>
                <ul className='projects-list'>
                    {Database.projects.map(project => (
                        <Card 
                            project={project}
                            key={project.id}
                        />
                    ))}
                </ul>
            </section>
        )
    }
}
