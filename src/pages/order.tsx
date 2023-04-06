import Layout from '@/components/Layout/Layout'
import {GetOrderRequest, AddOrderRequest, EditOrderRequest, DelOrderRequest} from '../components/Order/order.action'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const OrderTable = () => {
    const {Orders} = useSelector((state:any)=>state.orderState)
    const [ordersId, setordersId] = useState(0);
    const [totalProduct, settotalProduct] = useState(0);
    const [totalPrice, settotalPrice] = useState(0);
    const [createdat, setCreatedat] = useState('');
    const [updatedat, setUpdatedat] = useState('');
    const[usersId, setUsersId] = useState(0)
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(GetOrderRequest())
    }, [dispatch])

    const handleAdd = () => {
        const payload = {
          ordersId:Orders.length+1,
          totalProduct,
          totalPrice,
          createdat,
          usersId
        };
        dispatch(AddOrderRequest(payload));
        setordersId(0)
        settotalProduct(0);
        settotalProduct(0);
        setCreatedat('');
        setUsersId(0);
      };
    
      const handleEdit = () => {
        const payload = {
          totalProduct,
          totalPrice,
          updatedat,
          ordersId
        };
        dispatch(EditOrderRequest(payload));
        settotalProduct(0)
        settotalPrice(0)
        setUpdatedat('')
        setordersId(0)
        setIsEdit(false);
        window.location.reload()
      };
    
      const handleEditData = (totalProduct:number, totalPrice:number, updatedat:any, ordersId:number) => {
        settotalProduct(totalProduct)
        settotalPrice(totalPrice)
        setUpdatedat(updatedat)
        setordersId(ordersId)
        setIsEdit(true);
      };

      const handleDelete = (ordersId:number) => {
        const payload = {
            ordersId
          };
        dispatch(DelOrderRequest(payload));
        setordersId(ordersId)
        window.location.reload()
      };

      const handleCancel = () =>{
        setIsEdit(false)
        window.location.reload()
      }
    
return (
    
    <section className="antialiased bg-gray-100 text-gray-600 px-4">
    <Layout>
    <div className="flex flex-col justify-center h-full">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Order</h2>
            </header>
            <div className="p-1">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">OrderId</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">TotalProduct</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">TotalPrice</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Createdat</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Updatedat</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {Orders.map((e:any) => 
                            <tr key={e.ordersId}>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.ordersId}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.totalProduct}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.totalPrice}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.createdat}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.updatedat}</div>
                                    </div>
                                </td>
                                <td>
                                    <button className='bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' onClick={()=>handleEditData(e.totalProduct, e.totalPrice,e.updatedat, e.ordersId)}>Edit</button>
                                    <button className='bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' onClick={()=>handleDelete(e.ordersId)}>Delete</button>
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

    <label htmlFor="totalProduct" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Total Product</label>
    <input 
    id="totalProduct" 
    type="number" 
    name="totalProduct" 
    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    value={totalProduct}
    onChange={(e) => settotalProduct(parseInt(e.target.value))}
    />
    <label htmlFor="totalPrice" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Total Price</label>
    <input 
    id="totalPrice" 
    type="number" 
    name="totalPrice" 
    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    value={totalPrice}
    onChange={(e) => settotalPrice(parseInt(e.target.value))}
    />
    
    {isEdit ? (
    <div>
        <label htmlFor="updatedat" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Updated At</label>
        <input 
        id="updatedat" 
        type="Date" 
        name="updatedat" 
        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        value={updatedat}
        onChange={(e) => setUpdatedat(e.target.value)}
        />
    </div>) : 
    (
    <div>
        <label htmlFor="usersId" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">User Id</label>
        <input 
        id="usersId" 
        type="Number" 
        name="usersId" 
        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        value={usersId}
        onChange={(e) => setUsersId(parseInt(e.target.value))}
        />
        <label htmlFor="createdat" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Created At</label>
        <input 
        id="createdat" 
        type="Date" 
        name="createdat" 
        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        value={createdat}
        onChange={(e) => setCreatedat(e.target.value)}
        />
    </div>
    )}
   

    {isEdit ? 
    (
    <div>
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
</Layout>
</section>
)}
    


export default OrderTable
