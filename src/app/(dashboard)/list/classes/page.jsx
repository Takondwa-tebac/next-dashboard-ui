"use client"

import { classesData } from "@/lib/data";
import DataTable from "react-data-table-component";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Classes(){

    const [filterText, setFilterText] = useState('');  


      const filteredData = classesData.filter(
        item =>
          item.name.toLowerCase().includes(filterText.toLowerCase()) 
      );

      const handleEdit =() => {};
      const handleDelete =() => {};

      const columns = [

        { name: 'Name', selector: row => row.name,sortable: true },
        { name: 'Capacity', selector: row => row.capacity, sortable: true },
        { name: 'Grade', selector: row => row.grade, sortable: true },
        { name: 'Supervisor', selector: row => row.supervisor, sortable: true },
        {
          name: "Actions",
          cell: row => (
              <>
              <button onClick={() => handleEdit(row.id)} className=" py-1 px-1 text-xs text-white  bg-purple-500">
                  Edit               
              </button>

              <button onClick={() => handleDelete(row.id)} className=" py-1 px-1 text-xs text-white  bg-yellow-500">
                 Delete
             </button>
              </>
            ), 
        }
      ];


    return (
        <>       
        <Head>
            <title>Classes</title>
        </Head>
      
        <div className="my-2 flex flex-row justify-between">
            <span>All Classes</span>

            <Link href={"#"} className="bg-gray-600 shadow-sm flex items-center rounded-sm justify-center hover:bg-gray-500 cursor-pointer mx-2 text-white w-8">
               <span className="font-bold text-lg text-center">+</span>
            </Link>
        </div>
       

        <div className="overflow-x-auto">

             <DataTable
                columns={columns}
                data={filteredData}
                pagination
                // selectableRows
                persistTableHead
                subHeader
                subHeaderComponent={
                    

                    <label className="flex items-center px-2 input input-bordered gap-2 input-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="text-black stroke-black w-5 h-5">
	                        <path fill="white" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" />
                        </svg>
                        <input
                        type="text"
                        placeholder="Search"
                        className="px-2 input input-bordered input-sm"
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                    </label>
        
                } 
            />   
        </div>
        </>
    )
}
