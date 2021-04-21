import React, {useEffect, useState} from 'react'

import Hello from './elements/Hello'
import Welcome from './elements/Welcome'
import About from './elements/About'
import Technologies from './elements/Technologies'
import Projects from './elements/Projects'

export default function App() {

  return (
    <div className='App'>

      <div className='container-lg welcome-page'>

        <div className='row'>
          <Hello />
          <Welcome />

        </div>
      </div>

      <div className='container-lg about-page'>
          <About />
      </div>

      <div className='technologies-page'>
          <Technologies />
      </div>

      <div className='container-lg projects-page'>
          <Projects />
      </div>
    </div>
)
}
