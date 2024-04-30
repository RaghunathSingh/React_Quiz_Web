import React from 'react'
// Note if you do not import image like below and just type path in src under "" then the image do not show in UI.
import logoImg from '../assets/quiz-logo.png'

const Header = () => {
  return (
    <header>
        <img src={logoImg} alt="Quiz Logo"/>
        <h1>ReactQuiz</h1>
    </header>
  )
}

export default Header