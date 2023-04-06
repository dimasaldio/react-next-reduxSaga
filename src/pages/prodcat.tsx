import Layout from '@/components/Layout/Layout'
import {GetProdcatRequest, AddProdcatRequest, EditProdcatRequest, DelProdcatRequest} from '../components/ProductCategory/prodcat.action'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProdcatTable = () => {
    const {prodcats} = useSelector((state:any)=>state.prodcatState)
    const [productCategoryId, setproductCategoryId] = useState(0);
    const [nameProductCategory, setnameProductCategory] = useState('');
    const [descProductCategory, setdescProductCategory] = useState('');
    const [createdat, setCreatedat] = useState('');
    const [updatedat, setUpdatedat] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(GetProdcatRequest())
    }, [dispatch])

    const handleAdd = () => {
        const payload = {
          productCategoryId:prodcats.length+1,
          nameProductCategory,
          descProductCategory,
          createdat
        };
        dispatch(AddProdcatRequest(payload));
        setproductCategoryId(0)
        setnameProductCategory('');
        setnameProductCategory('');
        setCreatedat('');
      };
    
      const handleEdit = () => {
        const payload = {
          productCategoryId,
          nameProductCategory,
          descProductCategory,
          updatedat
        };
        dispatch(EditProdcatRequest(payload));
        setnameProductCategory('')
        setdescProductCategory('')
        setUpdatedat('')
        setproductCategoryId(0)
        setIsEdit(false);
        window.location.reload()
      };
    
      const handleEditData = (nameProductCategory:string, descProductCategory:string, updatedat:any, productCategoryId:number) => {
        setnameProductCategory(nameProductCategory)
        setdescProductCategory(descProductCategory)
        setUpdatedat(updatedat)
        setproductCategoryId(productCategoryId)
        setIsEdit(true);
      };

      const handleDelete = (productCategoryId:number) => {
        const payload = {
            productCategoryId
          };
        dispatch(DelProdcatRequest(payload));
        setproductCategoryId(productCategoryId)
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
                <h2 className="font-semibold text-gray-800">Product Category</h2>
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
                                    <div className="font-semibold text-left">Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Desc</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Created at</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Updated at</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {prodcats.map((e:any) => 
                            <tr key={e.productCategoryId}>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.productCategoryId}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.nameProductCategory}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.descProductCategory}</div>
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
                                    <button className='bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' onClick={()=>handleEditData(e.nameProductCategory, e.descProductCategory,e.updatedat, e.productCategoryId)}>Edit</button>
                                    <button className='bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' onClick={()=>handleDelete(e.productCategoryId)}>Delete</button>
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

    <label htmlFor="nameProductCategory" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Product Category Name</label>
    <input 
    id="nameProductCategory" 
    type="text" 
    name="nameProductCategory" 
    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    value={nameProductCategory}
    onChange={(e) => setnameProductCategory(e.target.value)}
    />
    <label htmlFor="descProductCategory" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Product Category Desc</label>
    <input 
    id="descProductCategory" 
    type="text" 
    name="descProductCategory" 
    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    value={descProductCategory}
    onChange={(e) => setdescProductCategory(e.target.value)}
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
    


export default ProdcatTable
