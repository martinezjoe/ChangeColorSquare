import React from 'react'


const ElementColor = ({color, mouseOver, mouseOut, doubleClick}) => {
  return (
    <div style={{
      backgroundColor: color,
      height: '255px',
      width: '255px',
      
    }}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      onDoubleClick = {doubleClick}>
      
      
    </div>
  )
}

export default ElementColor
