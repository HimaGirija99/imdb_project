import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[60vh] bg-center bg-no-repeat flex items-end'
        style = {{
            backgroundImage :  `url(https://i.pinimg.com/564x/ee/a8/fa/eea8fa698bc52a96791f637c4de3ac3e.jpg)`
        }}>
            <div>Satakarni</div>
    </div>
  )
}

export default Banner