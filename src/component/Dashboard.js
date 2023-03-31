import React from 'react'
import { Outlet } from 'react-router-dom'

const navigate = [
    {name:'Login', href:'login', current: false},
    {name:'Register', href:'register', current: false}
]


const Dashboard = () => {
  
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
      <main>
        <Outlet/>
      </main>
    </div>
    </nav>
  )
}

export default Dashboard
