import React from 'react'
import styled from "styled-components"
import Section from "./Section"


function Home() {
  return (
    <Container>
       <Section 
       title="Model S"
       description="Order Online for Touchless Delivery"
       backgroundImg="model-s.jpg"  
       leftButton="Custom Order"
       rightButton="EXISTING INVENTORY"

       />
       <Section 
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"  
        leftButton="Custom Order"
        rightButton="EXISTING INVENTORY"
       />
       <Section 
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"  
        leftButton="Custom Order"
        rightButton="EXISTING INVENTORY"
       
       />
       <Section 
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"  
        leftButton="Custom Order"
        rightButton="EXISTING INVENTORY"
       />
       <Section 
       title="Solar Panel"
       description="Lowest Cost Solar Panels in America"
       backgroundImg="solar-panel.jpg"
       leftButton="Order Now"
       rightButton="Learn More"

       />
       <Section 
       title="Solar Roof"
       description="Produce Clean Energy & Add Value to Your Home"
       backgroundImg="solar-roof.jpg"
       leftButton="Order Now" 
       rightButton="Learn More"

       />
       <Section 
       title ="Accesories"
       description="Shop Genuine Tesla Accessories"
       backgroundImg="accessories.jpg"
       leftButton="Shop Now"
       

      
       />

    </Container>
  )
}

export default Home
const Container = styled.div`
    height: 100vh;
   


`
