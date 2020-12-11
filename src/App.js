import React, { useState } from 'react'
import spotify from './images/spotify.png'
import insta from './images/insta.png'
import logovit from './images/logovit.svg'
import './App.css'
import styled from 'styled-components'

const Wrap = styled.div`
display:flex;
flex-direction: column;
`
const FinImg = styled.img`
height: 30vh;
cursor: pointer;
transition: 300ms;
transform: ${props => props.rotate ? 'rotate(360deg)' : 'rotate(0deg)'};
`

const SmoothDiv = styled.div`
display:flex;
flex-direction:row;
align-items:center;
margin-top:50px;
opacity: ${props => props.visible ? '1' : '0'};
transition: 300ms;
`

function App () {
  var i = 0
  const [rotated, setRotated] = useState(false)
  const [visible, setVisible] = useState(false)
  const rotate = () => {
    setRotated(!rotated)
    i++
    check(i)
  }

  const check = (i) => {
    if (i > 0) {
      setVisible(true)
    }
  }

  return (
    <div className='App'>
      <header className='App-header' />
      <Wrap>
        <FinImg src={logovit} alt='logo' onClick={rotate} rotate={rotated} />
        <SmoothDiv visible={visible}>
          <a href='https://open.spotify.com/show/5OIBQMT5mRC1P0ASnQ4s3r?si=NMdvoPCqTO2wN7d6gjW58Q'><img className='social' src={spotify} alt='spotify' /></a>
          <a href='https://www.instagram.com/diiiofficial/'><img className='social' src={insta} alt='spotify' /></a>
        </SmoothDiv>
      </Wrap>
    </div>
  )
}

export default App
