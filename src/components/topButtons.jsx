import React from 'react'

function TopButtons({setQuery}) {
  const cities = [
    {
        id: 1,
        title: 'Bangalore'
    },
    {
        id: 2,
        title: 'Hyderabad'
    },
    {
        id: 3,
        title: 'Gujarat'
    },
    {
        id: 4,
        title: 'Chennai'
    },
    {
        id: 5,
        title: 'Delhi'
    }
  ]
  return <div className='flex items-center justify-around my-6'>
    {cities.map((city) => (
        <button key={city.id} className='text-white text-lg font-medium hover:scale-110' 
        onClick = {() => setQuery({q: city.title})}>{city.title}</button>
    ))}
  </div>
}

export default TopButtons