import React from 'react'
import styled from 'styled-components'
import { Zoom } from "react-awesome-reveal";

function Section({title,description,leftButton,rightButton,backgroundImg}) {
  return (
    <Wrap bgImage = {backgroundImg}>
      <Zoom bottom>
      <ItemText>
        <h1> {title}</h1>
        <h5>{description}</h5>
      </ItemText>
      </Zoom >
      <Buttons>
        <Zoom bottom>
      <ButtonGroup>
        <LeftButton>{leftButton}</LeftButton>
        {rightButton &&   <RightButton>{rightButton}</RightButton>}
       

      </ButtonGroup>
      <DownArrow src="down-arrow.svg" />
      </Zoom >
      </Buttons>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background: url("model-s.jpg") center center / cover
no-repeat;
display: flex;
align-items: center;
flex-direction: column;
justify-content:space-between;
background: ${props => `url(${props.bgImage})center center / cover`};


`
const ItemText = styled.div`
padding-top: 15vh;
padding-left: 50px;
padding-right: 50px;




`
const ButtonGroup = styled.div`
display: flex;
padding:25px 0px;
margin-bottom:30px;
@media (max-width: 768px){
flex-direction:column;
}
`
const LeftButton = styled.div`

border-radius:100px;
padding:10px 20px;
width:256px;
height:40px;
background-color: rgba(23,26,32,0.8);
color: white;
text-transform: uppercase;
font-size: 12px;
cursor:pointer;
opacity:.85;
margin: 8px;

`
const RightButton = styled.div`

 border-radius:100px;
padding:10px 20px;
width:256px;
height:40px;
background-color: white;
color: black;
text-transform: uppercase;
font-size: 13px;
font-weight:600;
cursor:pointer;
opacity:.95;
margin: 8px;

`
const DownArrow = styled.img`
width: 40px; 
height: 40px; 
animation: animateDown infinite 1.5s;

`

const Buttons = styled.div``

