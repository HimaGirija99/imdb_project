import React from 'react'

function Banner() {
  return (
    <div className='w-100vw h-[100vh]  bg-center bg-no-repeat flex items-end'
        style = {{
            backgroundImage :  `url(https://i.pinimg.com/564x/ee/a8/fa/eea8fa698bc52a96791f637c4de3ac3e.jpg)`
        }}>
            <div className='text-xl md:text-3xl bg-gray-400 bg-opacity-60 p-4 text-white text-center w-full'>Satakarni</div>
    </div>
  )
}

export default Banner