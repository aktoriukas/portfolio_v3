import React, { Component } from 'react'
import Database from '../data/Database';
import Card from './Card';

export default class Projects extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             middleCard: 4
        }
    }
    
    render() {
        return (
            <section id='projects'>
                <ul className='projects-list'>
                    {Database.projects.map(project => (
                        <Card 
                            project={project}
                            key={project.id}
                            middleCard={this.state.middleCard}
                        />
                    ))}
                </ul>
            </section>
        )
    }
}
