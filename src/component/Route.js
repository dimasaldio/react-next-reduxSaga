import React from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import FormAuthLogin from './views/FormAuthLogin'
import FormAuthRegister from './views/FormAuthRegister'
import Table from './views/Table'
import Dashboard from './Dashboard'

const Routing = () => {
    return useRoutes([
        {
            path:'/',
            element:<Dashboard/>,
            children:[
                {path:'login', element:<FormAuthLogin/>},
                {path:'register', element:<FormAuthRegister/>}
            ]
        },
        {   
            path:'listCustomers', 
            element: <Table/> ,
        },
        {
            path:'*',
            element:<Navigate to='/404' replace />
        }
    ])
}

export default Routing
