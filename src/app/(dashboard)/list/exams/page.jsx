"use client"

import { examsData } from "@/lib/data";
import DataTable from "react-data-table-component";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Exams(){

    const [filterText, setFilterText] = useState('');  


      const filteredData = examsData.filter(
        item =>
          item.subject.toLowerCase().includes(filterText.toLowerCase()) ||
          item.teacher.toLowerCase().includes(filterText.toLowerCase()) ||
          item.class.toLowerCase().includes(filterText.toLowerCase()) 

      );

      const handleEdit =() => {};
      const handleDelete =() => {};

      id: 1,
      subject: "Math",
      class: "1A",
      teacher: "Martha Morris",
      date: "2025-01-01",

      const columns = [

        { name: 'Subject', selector: row => row.subject,sortable: true },
        { name: 'Class', selector: row => row.class,sortable: true },
        { name: 'Teacher', selector: row => row.teacher,sortable: true },
        { name: 'Date', selector: row => row.date,sortable: true },
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
            <title>Teacher Subject Assignment</title>
        </Head>
      
        <div className="my-4 flex flex-row justify-between">
            <span className="text-lg text-gray-600">Teachers and their assigned subject per class</span>

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
