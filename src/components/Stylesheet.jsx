import React from 'react'
// importing style.css
import './style.css'


function Stylesheet(props) {
    let className=props.primary? 'primary' : ''
  return (
    <div>
        <h1 className={`${className} font-xl`}>stylesheets in jsx!</h1>
    </div>
  )
}

export default Stylesheet