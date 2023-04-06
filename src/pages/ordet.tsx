import Layout from '@/components/Layout/Layout'
import {GetOrdetRequest, AddOrdetRequest, EditOrdetRequest, DelOrdetRequest} from '../components/OrderDetail/ordet.action'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const OrdetTable = () => {
    const {ordets} = useSelector((state:any)=>state.ordetState)
    const [orderDetailId, setorderDetailId] = useState(0);
    const [quantity, setquantity] = useState(0);
    const [createdat, setCreatedat] = useState('');
    const [updatedat, setUpdatedat] = useState('');
    const [ordersId, setordersId] = useState(0)
    const [productId, setProductId] = useState(0)
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(GetOrdetRequest())
    }, [dispatch])

    const handleAdd = () => {
        const payload = {
          orderDetailId:ordets.length+1,
          quantity,
          createdat,
          ordersId,
          productId
        };
        dispatch(AddOrdetRequest(payload));
        setorderDetailId(0)
        setquantity(0);
        setquantity(0);
        setCreatedat('');
        setordersId(0);
        setProductId(0);
      };
    
      const handleEdit = () => {
        const payload = {
          quantity,
          updatedat,
          orderDetailId
        };
        dispatch(EditOrdetRequest(payload));
        setquantity(0)
        setUpdatedat('')
        setorderDetailId(0)
        setIsEdit(false);
        window.location.reload()
      };
    
      const handleEditData = (quantity:number, updatedat:any, orderDetailId:number) => {
        setquantity(quantity)
        setUpdatedat(updatedat)
        setorderDetailId(orderDetailId)
        setIsEdit(true);
      };

      const handleDelete = (orderDetailId:number) => {
        const payload = {
            orderDetailId
          };
        dispatch(DelOrdetRequest(payload));
        setorderDetailId(orderDetailId)
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
                <h2 className="font-semibold text-gray-800">Order Detail</h2>
            </header>
            <div className="p-1">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Id</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Quantity</div>
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
                            {ordets.map((e:any) => 
                            <tr key={e.orderDetailId}>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.orderDetailId}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.quantity}</div>
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
                                    <button className='bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' onClick={()=>handleEditData(e.quantity,e.updatedat, e.orderDetailId)}>Edit</button>
                                    <button className='bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' onClick={()=>handleDelete(e.orderDetailId)}>Delete</button>
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

    <label htmlFor="quantity" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Quantity</label>
    <input 
    id="quantity" 
    type="number" 
    name="quantity" 
    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    value={quantity}
    onChange={(e) => setquantity(parseInt(e.target.value))}
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
        <label htmlFor="ordersId" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Order Id</label>
        <input 
        id="ordersId" 
        type="Number" 
        name="ordersId" 
        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        value={ordersId}
        onChange={(e) => setordersId(parseInt(e.target.value))}
        />
        <label htmlFor="productId" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Product Id</label>
        <input 
        id="productId" 
        type="Number" 
        name="productId" 
        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        value={productId}
        onChange={(e) => setProductId(parseInt(e.target.value))}
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
    


export default OrdetTable
