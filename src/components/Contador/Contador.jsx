import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
function Contador({stock,inicial, onAdd}) {

const [count, setCount] = useState (inicial+onAdd)
console.log (count)
const handleSum = () => {
setCount (count +1)
}  
const handleRest = () => {
    if ((count > 0) && stock>0 )
    setCount (count -1)
    
    }  
  return (
      <>
    
    <Button variant="dark" onClick={handleSum}>+</Button>
    <label>{count}</label>
    <Button variant="dark" onClick={handleRest}>-</Button>
    
    </>

  )
}

export default Contador
