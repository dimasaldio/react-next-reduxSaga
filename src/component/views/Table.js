import {GetCustomerRequest, AddCustomerRequest, EditCustomerRequest, DelCustomerRequest} from '../Customer/customer.actions'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Table = () => {
    const {customers} = useSelector((state)=>state.CustomerState)
    const [customerId, setCustomerId] = useState(0)
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [usersId, setUsersId] = useState(0);
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(GetCustomerRequest())
    }, [dispatch])

    const handleAdd = () => {
        const payload = {
          customerId:customers.length+1,
          firstname,
          lastname,
          usersId,
        };
        dispatch(AddCustomerRequest(payload));
        setFirstname('');
        setLastname('');
        setUsersId(0);
      };
    
      const handleEdit = () => {
        const payload = {
          firstname,
          lastname,
          customerId
        };
        dispatch(EditCustomerRequest(payload));
        setFirstname('');
        setLastname('');
        setCustomerId(0)
        setIsEdit(false);
        window.location.reload()
      };
    
      const handleEditData = (firstname,lastname, customerId) => {
        setFirstname(firstname);
        setLastname(lastname);
        setCustomerId(customerId)
        setIsEdit(true);
      };

      const handleDelete = (customerId) => {
        const payload = {
            customerId
          };
        dispatch(DelCustomerRequest(payload));
        setCustomerId(customerId)
        window.location.reload()
      };

      const handleCancel = () =>{
        setIsEdit(false)
        window.location.reload()
      }
    
return (
    <section className="antialiased bg-gray-100 text-gray-600 px-4">
    <div className="flex flex-col justify-center h-full">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Customers</h2>
            </header>
            <div className="p-1">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">CustomerId</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">first Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">last Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Action</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {customers.map(e => 
                            <tr key={e.customerId}>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.customerId}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.firstname}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.lastname}</div>
                                    </div>
                                </td>
                                <td>
                                    <button onClick={()=>handleEditData(e.firstname, e.lastname, e.customerId)}>Edit</button>
                                    <button onClick={()=>handleDelete(e.customerId)}>Delete</button>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
<div className="grid min-h-screen place-items-center">
<div className="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
  <h1 className="text-xl font-semibold">{isEdit ? 'Update':'Create'}</h1>

    <label htmlFor="firstname" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">first name</label>
    <input 
    id="firstname" 
    type="text" 
    name="firstname" 
    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    value={firstname}
    onChange={(e) => setFirstname(e.target.value)}
    />

    <label htmlFor="lastname" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">last name</label>
    <input 
    id="lastname" 
    type="text" 
    name="lastname" 
    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    value={lastname}
    onChange={(e) => setLastname(e.target.value)}
    />

    {isEdit ? null : 
    (<div>
    <label htmlFor="usersId" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Users Id</label>
    <input 
    id="usersId" 
    type="text" 
    name="usersId" 
    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    value={usersId}
    onChange={(e) => setUsersId(e.target.value)}
    />
    </div>)}

    {isEdit ? 
    (<div>
        <button 
        className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
        onClick={handleEdit}>
        Update
        </button>
        <button 
        className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
        onClick={handleCancel}>
            Cancel
        </button>
    </div>) :
    (<button 
        className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
        onClick={handleAdd}>
              Add
    </button>)
    }
</div>
</div>
</section>
)}
    


export default Table
