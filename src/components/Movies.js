import React, {useEffect} from 'react'
import axios from 'axios'
function Movies() {
  useEffect(()=>{
    //IIFE
    (function(){
      axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=6d6ce2e8cc1e787add81ef111ff95f0b`).
      then((res)=>{console.log(res.data.results)});
    })()
  },[])
    
  
  
  return (
    <div>
    <div className='text-2xl mb-8 font-bold text-center'>Trending Movies</div>    
    <div className='flex'>
    <div className='w-[160px] h-[30vh] bg-center bg-cover rounded-xl m-4 md:h-[40vh] md:w-[180px] hover:scale-110 duration-300 relative flex items-end' style= {{backgroundImage: `url(https://i.pinimg.com/564x/ee/a8/fa/eea8fa698bc52a96791f637c4de3ac3e.jpg)`}}
    ><div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-60">Satakarni</div>
    </div>
    </div>
    </div>
  )
}

export default Movies