import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import {doSignoutRequest} from '@/components/Auth/auth.action'

const navigate = [
    {name:'Dashboard', href:'/', current: false},
    {name:'Customers', href:'/customer', current: false},
    {name:'Order', href:'/order', current: false},
    {name:'Order Detail', href:'/ordet', current: false},
    {name:'Product Category', href:'/prodcat', current: false},
    {name:'Product', href:'/product', current: false},
]

export default function Header() {

  const dispatch = useDispatch()
  const router = useRouter()
  const {authProfile} = useSelector((state:any)=>state.authState)
  const logout = () =>{
    dispatch(doSignoutRequest())
    router.reload()
  }
  useEffect(()=>{
    if(!authProfile){
      router.push('/login')
    }
  }, [authProfile, router])
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
          <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={()=>logout()}>
            <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white">Logout</span>
          </button>
        </div>
        </nav>
      )
}
