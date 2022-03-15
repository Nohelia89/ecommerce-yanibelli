import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
function StockCount({stock,initial}) {

const [count, setCount] = useState (initial)

const handleSum = () => {
    if (count< stock){
setCount (count +1)} 
}  
const handleRest = () => {
    if ((count > 1) && stock>0 )
    setCount (count -1)
    
    }  

    const onAdd = () => {
        if (!stock<1)
        console.log(count)
        else 
        console.log("Sin stock")
        }

  return (
      <>
    
    <Button variant="dark" onClick={handleSum}>+</Button>
    <h4>{count}</h4>
    
    <Button variant="dark" onClick={handleRest}>-</Button>
    <div>
   
    <Button variant="dark" onClick={onAdd}>Add to Cart</Button>
    </div>
    </>

  )
}

export default StockCount
