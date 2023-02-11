import React, {useState} from 'react';
import ElementColor from '../pure/elementColor';


const ContainerColor = () => {

  let red = 0;
  let green = 0;
  let blue = 0;
  let colorRGB = `rgb( ${red}, ${green}, ${blue} )`;


  const [colorRandom, setColorRandom] = useState(colorRGB);
  const [intervalID, setIntervalID] = useState();

  
  function changeColor () {
    red = Math.floor(Math.random() * 255);
    blue = Math.floor(Math.random() * 255);
    green = Math.floor(Math.random() * 255);
    setColorRandom( `rgb( ${red}, ${green}, ${blue} ) ` );
  }

  
  function mouseOverColor() {
    setIntervalID( setInterval(changeColor, 750) )
  }

  function stopChangeColor () {

    clearInterval(intervalID);
    setColorRandom( `rgb( ${red}, ${green}, ${blue} )` )
    
  }

  return (
    <div style = {{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '50px'
    }}>
      
      <h1> Hello, in this component, there is a square which change the color if you pass the mouse over there, so, to stop change color, you have move the mouse out the square or press double click on the square.
      </h1>

      <ElementColor 
        color={colorRandom}
        mouseOver = {mouseOverColor}
        mouseOut = {stopChangeColor}
        doubleClick = {stopChangeColor}> 
        </ElementColor>

        

    </div>
  )
}

export default ContainerColor
