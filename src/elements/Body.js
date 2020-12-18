import React, { Component } from 'react';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

export default class Body extends Component {

    render() {
        return (
            <section id='body'>
                <About />
                <Projects />
                <Footer />
            </section>
        )
    }
}
