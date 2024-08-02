import React from 'react'

function Movies() {
  return (
    <div>
    <div className='text-2xl mb-8 font-bold text-center'>Trending Movies</div>
    
    
    <div className='w-[160px] h-[30vh] bg-center bg-cover rounded-xl m-4 md:h-[40vh] md:w-[180px] hover:scale-110 duration-300 relative flex items-end' style= {{backgroundImage: `url(https://i.pinimg.com/564x/ee/a8/fa/eea8fa698bc52a96791f637c4de3ac3e.jpg)`}}></div>
    <div className='w-[160px] h-[30vh] bg-center bg-cover rounded-xl m-4 md:h-[40vh] md:w-[180px] hover:scale-110 duration-300 relative flex items-end' style= {{backgroundImage: `url(https://i.pinimg.com/564x/ee/a8/fa/eea8fa698bc52a96791f637c4de3ac3e.jpg)`}}></div>
    </div>
  )
}

export default Movies