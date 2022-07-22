import React from 'react'
import CategoriesItem from './CategoriesItem'

const Categories = () => {
  return (
    <div id='categories' className='p-2 md:p-8'>
        <h2 className='text-xl font-bold px-2'>
        <span className='text-[#9147ff]'>Caregories</span> we think you'll like
        </h2>
        {/* Container */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-10 gap-2 py-2'>
            <CategoriesItem img='https://static-cdn.jtvnw.net/ttv-boxart/29595-188x250.jpg' title='Dota 2' viewers='50k' tag1='MOBA' tag2='Shooter'/>
            <CategoriesItem img='https://static-cdn.jtvnw.net/ttv-boxart/29452_IGDB-188x250.jpg' title='Virtual Casino' viewers='8.9k' tag1='Excitement'/>
            <CategoriesItem img='https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-188x250.jpg' title='Counter-Strike' viewers='27kk' tag1='Shooter'/>
            <CategoriesItem img='https://static-cdn.jtvnw.net/ttv-boxart/512980-188x250.jpg' title='Fall Guys' viewers='64.2k' tag1='Shooter'/>
        </div>
    </div>
  )
}

export default Categories