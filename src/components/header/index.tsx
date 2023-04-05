import React from 'react'

const navigate = [
    {name:'Dashboard', href:'/', current: false},
    {name:'Regions', href:'/regions', current: false}
]

export default function Header() {
    return (
        <nav className='font-sans flex flex-col text-center bg-white shadow w-full py-4 px-6'>
        <div className='mb-2 sm:mb-0'>
          {navigate.map(item => {
            return (
            <a 
            key={item.name} 
            href={item.href}
            className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4"
            >
              {item.name}
            </a>)
          })}
        </div>
        </nav>
      )
}
