import React,{createContext,useState} from 'react';
import C from './C';
export let Context = createContext()
function A() {
    let[a,seta]=useState(10)
  return (
    <div>
        <Context.Provider value={a}>
          <C/>
            
            
        </Context.Provider>
      
    </div>
  )
}

export default A
