import Layout from '@/components/Layout/Layout'
import {GetProductRequest, AddProductRequest, EditProductRequest, DelProductRequest} from '../components/Product/product.action'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ProdcatTable = () => {
    const {products} = useSelector((state:any)=>state.productState)
    const [productId, setproductId] = useState(0);
    const [nameProduct, setnameProduct] = useState('');
    const [descProduct, setdescProduct] = useState('');
    const [productPrice, setproductPrice] = useState(0);
    const [file, setfile] = useState('')
    const [createdat, setCreatedat] = useState('');
    const [updatedat, setUpdatedat] = useState('');
    const [productCategoryId, setproductCategoryId] = useState(0)
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(GetProductRequest())
    }, [dispatch])

    const handleAdd = async () => {
        const payload:any = new FormData()
        
        payload.append('nameProduct', nameProduct)
        payload.append('descProduct', descProduct)
        payload.append('productPrice', productPrice)
        payload.append('file', file)
        payload.append('productCategoryId', productCategoryId)
        payload.append('createdat', createdat)
        payload.append('productId', products.length+1)
        dispatch(AddProductRequest(payload));
        setproductId(0)
        setnameProduct('');
        setdescProduct('');
        setproductPrice(0);
        setfile('');
        setCreatedat('');
        setproductCategoryId(0)
      };
    
      const handleEdit = async () => {
        const payloadEdit:any = new FormData()
        payloadEdit.append('nameProduct', nameProduct)
        payloadEdit.append('descProduct', descProduct)
        payloadEdit.append('productPrice', productPrice)
        payloadEdit.append('file', file)
        payloadEdit.append('productId', productId)
        payloadEdit.append('updatedat', updatedat)
        dispatch(EditProductRequest(payloadEdit));
        setnameProduct('')
        setdescProduct('')
        setproductPrice(0)
        setfile('')
        setUpdatedat('')
        setproductId(0)
        setIsEdit(false);
        console.log(productId)
        window.location.reload()
      };
    
      const handleEditData = async (nameProduct:string, descProduct:string, productPrice:number, file:any, updatedat:any, productId:number) => {
        setnameProduct(nameProduct)
        setdescProduct(descProduct)
        setproductPrice(productPrice)
        setfile(file)
        setUpdatedat(updatedat)
        setproductId(productId)
        setIsEdit(true);
      };

      const handleDelete = async (productId:number) => {
        const payload = {
            productId
          };
        dispatch(DelProductRequest(payload));
        setproductId(productId)
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
                <h2 className="font-semibold text-gray-800">Product</h2>
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
                                    <div className="font-semibold text-left">Price</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Image</div>
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
                            {products.map((e:any) => 
                            <tr key={e.productId}>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.productId}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.nameProduct}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.descProduct}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.productPrice}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.image}</div>
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
                                    <button className='bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' onClick={()=>handleEditData(e.nameProduct, e.descProduct, e.productPrice, e.image, e.updatedat, e.productId)}>Edit</button>
                                    <button className='bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' onClick={()=>handleDelete(e.productId)}>Delete</button>
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

    <label htmlFor="nameProduct" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Product Name</label>
    <input 
    id="nameProduct" 
    type="text" 
    name="nameProduct" 
    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    value={nameProduct}
    onChange={(e) => setnameProduct(e.target.value)}
    />
    <label htmlFor="descProduct" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Product Desc</label>
    <input 
    id="descProduct" 
    type="text" 
    name="descProduct" 
    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    value={descProduct}
    onChange={(e) => setdescProduct(e.target.value)}
    />
    <label htmlFor="productPrice" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Product Price</label>
    <input 
    id="productPrice" 
    type="number" 
    name="productPrice" 
    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    value={productPrice}
    onChange={(e) => setproductPrice(parseInt(e.target.value))}
    />
    <label htmlFor="file" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Product Image</label>
    <input 
    id="file" 
    type="file" 
    name="file" 
    accept="image/jpg, image/jpeg, image/png"
    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    onChange={(e) => setfile(e.target.files?.[0]??null)}
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
        <label htmlFor="productCategoryId" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Product Category Id</label>
        <input 
        id="productCategoryId" 
        type="Number" 
        name="productCategoryId" 
        className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
        value={productCategoryId}
        onChange={(e) => setproductCategoryId(parseInt(e.target.value))}
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
    


export default ProdcatTable
