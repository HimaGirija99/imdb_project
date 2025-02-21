import React from 'react'
import movieLogo from '../movieLogo.png'
import {Link} from 'react-router-dom'
function navBar() {
  return (    
    <div className = 'flex border space-x-8 items-center pl-3 py-4'>  
        <img src={movieLogo} alt =''className = 'w-[100px]'/>     
        <Link to="/" className = 'text-blue-400'>Movies</Link>
        <Link to="/watchlist" className = 'text-blue-400'>WatchList</Link>
    </div>      
  );
}

export default navBar