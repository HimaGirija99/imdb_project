import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[60vh] bg-center bg-no-repeat flex items-end'
        style = {{
            backgroundImage :  `url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vintagemovieposters.co.uk%2Fshop%2Favengers-movie-poster%2F&psig=AOvVaw2GT5HNSNbA-JFa4ZFeEpG2&ust=1722601499778000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPjHpvnk04cDFQAAAAAdAAAAABAE)`
        }}>
            <div className='text-xl md:text-3xl bg-gray-400 bg-opacity-60 p-4 text-white text-center w-full'>Avengers</div>
    </div>
  )
}

export default Banner