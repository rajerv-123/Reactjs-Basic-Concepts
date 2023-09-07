import React, {  useContext } from 'react'

import userData from "./useMain"

const B =()=>{
  let user = useContext (userData)
    return (
      <div>

      {user}  hii kaise ho 
      </div>
    )
  }


export default B
