import React ,{ useContext , useState }from 'react'
import { Context } from './A'

function C() {
    let d = useContext(Context);
  return (
    <div>
        <h1>this is value in A{d}</h1>
      
    </div>
  )
}

export default C
