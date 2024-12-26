import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [status, setStatus] = useState(false)
  return (
    <Container>
      <a>
        <img src="logo.svg" alt="Logo"/>
      </a>
      <Menu>
        <a href= "#">Model S</a>
        <a href= "#"> Model Y</a>
        <a href= "#">Model X</a>
        <a href= "#">Model 3</a>

      </Menu>
      <RightMenu>
        <a href= "#">Shop</a>
        <a href= "#">Tesla Account</a>
        <CostumMenu onClick={() => setStatus(true)}/>
      </RightMenu>
     
      <BurgerNav status = {status}>
        <CloseWrap>
          <CustumClose  onClick={() => setStatus(false)}/>
        </CloseWrap>
      
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Truck</a></li>
          <li><a href='#'>Solar Energy</a></li>
          <li><a href='#'>Electric Inventory</a></li>
          <li><a href='#'>Solar Panel</a></li>
          <li><a href='#'> Accessories</a></li>
          <li><a href='#'>Features</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 20px;
top:0;
left:0;
right:0;

`
const Menu = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;

a{
font-weight:600;
text-trasform: uppercase;
padding: 0 10px;
flex-wrap: no-wrap;
}
@media (max-width:768px){
display:none;
}

`
const RightMenu = styled.div`
display:flex;
align-item:center;
a{
font-weight:600;
text-trasform: uppercase;
margin-right:5px;
padding: 0 10px;
flex-wrap: no-wrap;
}
`
const CostumMenu = styled(MenuIcon)`
cursor:pointer;

`
const BurgerNav = styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:rgba(250, 250, 250, .4) ;
list-style:none;
width:250px;

z-index:16;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
border-radius:14px 0 0;
transform: ${props => props.status ? `translateX(0)`: `translateX(100%)`};
transition: transform 0.3s ease-in-out;


li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    &:hover {
    
    border-radius:4px;
     padding:8px;
      background-color: white; /* Set the background color on hover */
    }

    a {
      text-decoration: none;
      font-weight: 600;
    }

}

 `
 const CustumClose = styled(CloseIcon)``

 const CloseWrap = styled.div`
  cursor:pointer;
  display:flex;
  justify-content:end;
  
 
 
 `
 
