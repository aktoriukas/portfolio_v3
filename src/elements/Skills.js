import React, { Component } from 'react';
import Database from '../data/Database';
import Skill from './Skill';


export default class Skills extends Component {
    render() {
        return (
            <ul className='skills'>
                {Database.skills.map((skill) => (
                    <li
                        key={skill.id}
                        className='skill'
                    >
                    <h3>{skill.title}</h3>
                        <Skill 
                            skill={skill}
                        />
                    </li>
                ))}
            </ul>
        )
    }
}
