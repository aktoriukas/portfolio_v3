import React, { Component } from 'react'

export default class BackgroundSlice extends Component {
    render() {
        let cubes = []
        for(let i = 0; i < 20; i++) {
            let random = Math.floor(Math.random() * 150) + 50
            let position = Math.floor(Math.random() * 100)
            let size = {
                width: random,
                height: random,
                left: `${position}%`,
                animationDuration: `${i + 20}s`,
                animationDelay: `${i}s`
            }
            cubes.push(
                <div style={size} className='cube' key={i}>
                </div>
            )
        }
        return (
            <div id='background'>
                {cubes.map(cube => cube)}
            </div>
        )
    }
}
