import React, { Component } from 'react';
import Cube from './Cube';
import BackgroundSlice from './BackgroundSlice'

import Logo from './Logo'

export default class Welcome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inView: true
        }
    }

    addEvents() {
        const nameBox = document.getElementById('name-box')
        const gitBox = document.getElementById('github-box')
        const webBox = document.getElementById('web-box')
        const emailBox = document.getElementById('email-box')

        const nameGroup = document.getElementById('name-group')
        const gitGroup = document.getElementById('git-group')
        const webGroup = document.getElementById('web-group')
        const emailGroup = document.getElementById('email-group')

        const logoContainer = document.getElementById('logo-container')

        nameBox.addEventListener('mouseover', () => {
            nameGroup.classList.add('active')
            logoContainer.classList.add('active')
        })
        nameBox.addEventListener('mouseout', () => {
            nameGroup.classList.remove('active')
            logoContainer.classList.remove('active')
        })

        gitBox.addEventListener('mouseover', () => {
            gitGroup.classList.add('active')
            logoContainer.classList.add('active')
        })
        gitBox.addEventListener('mouseout', () => {
            gitGroup.classList.remove('active')
            logoContainer.classList.remove('active')
        })

        webBox.addEventListener('mouseover', () => {
            webGroup.classList.add('active')
            logoContainer.classList.add('active')
        })
        webBox.addEventListener('mouseout', () => {
            webGroup.classList.remove('active')
            logoContainer.classList.remove('active')
        })

        emailBox.addEventListener('mouseover', () => {
            emailGroup.classList.add('active')
            logoContainer.classList.add('active')
        })

        emailBox.addEventListener('mouseout', () => {
            emailGroup.classList.remove('active')
            logoContainer.classList.remove('active')
        })

    }

    componentDidMount() {
        this.addEvents()
    }

    render() {
        return (
            <section id='welcome-screen'>
                <div className='about'>
                    {/* <div id='header-container'>
                        <h1>Welcome</h1>
                        <span className='bottom'></span>
                        <span className='right'></span>
                        <span className='top'></span>
                        <span className='left'></span>
                    </div> */}
                    {/* <Cube 
                        scrolled={this.props.scrolled}
                    /> */}
                    <div id='logo-container' className='cont'>
                        <div id='name-box' className='box' />
                        <div id='web-box' className='box' />
                        <div id='github-box' className='box' />
                        <div id='email-box' className='box' />
                        <Logo />
                    </div>
                    <BackgroundSlice />
                </div>
            </section>
        )
    }
}
