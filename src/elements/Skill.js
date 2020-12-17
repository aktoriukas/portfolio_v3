import React, { Component } from 'react'

export default class Skill extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             skill: ''
        }
    }
    

    static getDerivedStateFromProps(props, state) {
        var skill = props.skill.info.split('/');
        return {
            skill: skill
        }
    }

    render() {
        return (
            <ul>
                {this.state.skill.map(sk => (
                    <li key={sk}>{sk}</li>
                ))}
            </ul>
        )
    }
}
