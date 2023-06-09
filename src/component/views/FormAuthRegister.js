import React from 'react'
import {doSignupRequest} from '../Auth/auth.action'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

const FormAuthRegister = () => {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        onSubmit : async(values)=>{
            let payload = {
                username: values.username,
                password: values.password
            }
            dispatch(doSignupRequest(payload))
            window.alert('Sukses Registrasi')
            window.location.reload()
        }
    })


  return (
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
  <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
    <h1 class="font-bold text-center text-2xl mb-5">REGISTER</h1>  

    <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
    <form onSubmit={formik.handleSubmit}>
      <div class="px-5 py-7">
        
        <label class="font-semibold text-sm text-gray-600 pb-1 block">Username</label>
        <input 
        type="text" 
        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" 
        id='username' 
        value={formik.values.username} 
        onChange={formik.handleChange}
        />
        
        <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
        <input 
        type="text" 
        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" 
        id='password' 
        value={formik.values.password} 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        />
        
        <button type="submit" class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
            <span class="inline-block mr-2">Register</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>

      </div>
      
      <div class="py-5">
        <div class="grid grid-cols-2 gap-1">
          <div class="text-center sm:text-right  whitespace-nowrap">
            <Link to='/login'>
            <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-bottom	">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <span class="inline-block ml-1">Belum punya akun? Klik Disini</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
      </form>
    </div>
      </div>
  </div>
  )
}

export default FormAuthRegister
