import React, { Component } from 'react';
import Database from '../data/Database';
import Skill from './Skill';


export default class Skills extends Component {
    render() {
        return (
            <div className='skills'>
                {Database.skills.map((skill) => (
                    <div
                        key={skill.id}
                        className='skill'
                    >
                        <div className='skill-inner'>
                            <div className='front'>
                                <h3>{skill.title}</h3>
                            </div>
                            <div className='back'>
                                <Skill
                                    skill={skill}
                                    key={skill.id}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
