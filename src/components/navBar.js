import React from 'react'
import movieLogo from './movieLogo.png'
function navBar() {
  return (
    
        <div className = 'flex border space-x-8 items-center pl-3 py-4'>  
        <img src={movieLogo} alt="" className = 'w-[50px]'/>     
        <h3 className = 'text-blue-400'>Movies</h3>
        <h3 className = 'text-blue-400'>WatchList</h3>
        </div>
      
  )
}

export default navBar