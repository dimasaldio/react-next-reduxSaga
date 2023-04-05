import Layout from '@/components/layout'
import {GetRegionRequest, AddRegionRequest, EditRegionRequest, DelRegionRequest} from '../regions/regions.action'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Table = () => {
    const {regions} = useSelector((state:any)=>state.RegionState)
    const [regionId, setRegionId] = useState(0)
    const [regionName, setRegionName] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(GetRegionRequest())
    }, [dispatch])

    const handleAdd = () => {
        const payload = {
          regionId:regions.length+1,
          regionName,
        };
        dispatch(AddRegionRequest(payload));
        setRegionName('');
      };
    
      const handleEdit = () => {
        const payload = {
          regionId,
          regionName
        };
        dispatch(EditRegionRequest(payload));
        setRegionName('');
        setRegionId(0)
        setIsEdit(false);
        window.location.reload()
      };
    
      const handleEditData = (regionName:string, regionId:number) => {
        setRegionName(regionName);
        setRegionId(regionId)
        setIsEdit(true);
      };

      const handleDelete = (regionId:number) => {
        const payload = {
            regionId
          };
        dispatch(DelRegionRequest(payload));
        setRegionId(regionId)
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
                <h2 className="font-semibold text-gray-800">Regions</h2>
            </header>
            <div className="p-1">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Region Id</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Region Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Action</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            {regions.map((e:any) => 
                            <tr key={e.regionId}>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.regionId}</div>
                                    </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="font-medium text-gray-800">{e.regionName}</div>
                                    </div>
                                </td>
                                <td>
                                    <button className='bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' onClick={()=>handleEditData(e.regionName, e.regionId)}>Edit</button>
                                    <button className='bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' onClick={()=>handleDelete(e.regionId)}>Delete</button>
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

    <label htmlFor="regionName" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Region name</label>
    <input 
    id="regionName" 
    type="text" 
    name="regionName" 
    className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
    value={regionName}
    onChange={(e) => setRegionName(e.target.value)}
    />

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
</Layout>
</section>
)}
    


export default Table
