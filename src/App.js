import React, {useEffect, useState} from 'react'

import SocialMedia from './elements/Social'
import Title from './elements/Title'
import Projects from './elements/Projects'
import Contact from './elements/Contact';

export default function App() {

  return (

  <div className={`App`}>

    <SocialMedia />

    <Title />

    <Projects />

    <Contact />

  </div>   
  )
}
