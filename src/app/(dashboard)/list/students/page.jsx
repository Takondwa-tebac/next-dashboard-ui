"use client"

import { role,studentsData } from "@/lib/data";
import DataTable from "react-data-table-component";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import FormModal from '@/components/formodal';

export default function Students(){

    const [filterText, setFilterText] = useState('');  

      const filteredData = studentsData.filter(
        item =>
          item.name.toLowerCase().includes(filterText.toLowerCase()) ||
          item.class.includes(filterText.toLowerCase()) ||
          item.grade.includes(filterText)
      );

      const controls = role == "admin" ? 
      {
          name: "Actions",
          cell: row => (
              <>
             <FormModal table="students" type="edit" id={row.studentId } />
             <FormModal table="students" type="delete" id={row.studentId } />
              </>
            ), 
        }
        : {}
    

      const columns = [
        {
            name: "Info",
            cell: row => (
                <>
                <div className="flex flex-row items-center gap-2">
                    <img src={row.photo} alt={row.name} className="h-8 w-8 rounded-full contain" />
                    <div className="flex flex-col flex-no-wrap gap-2">
                        <h1 className="text-gray-600 text-xs font-semibold">{row.name}</h1>
                        <span className="text-xs text-gray-400">{row.email}</span>
                    </div>
                </div>
                </>
            )
        },
        { name: 'Id', selector: row => row.studentId, sortable: true },
        { name: 'Grade', selector: row => row.grade,sortable: true },
        { name: 'Class', selector: row => row.class, sortable: true },
        { name: 'Phone', selector: row => row.phone, sortable: true },
        { name: 'Adress', selector: row => row.address, sortable: true },
         controls
      ];


    return (
        <>       
        <Head>
            <title>Students</title>
        </Head>
      
        <div className="my-2 flex flex-row justify-between mx-3">
            <span>All Students</span>

            {/* <Link href={"#"} className="bg-gray-600 shadow-sm flex items-center rounded-sm justify-center hover:bg-gray-500 cursor-pointer mx-2 text-white w-8">
               <span className="font-bold text-lg text-center">+</span>
            </Link> */}
            { role === "admin" && (
             <FormModal table="students" type="create" className="bg-gray-500" />
            )}
        </div>
       

        <div className="overflow-x-auto">

             <DataTable
                columns={columns}
                data={filteredData}
                pagination
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
