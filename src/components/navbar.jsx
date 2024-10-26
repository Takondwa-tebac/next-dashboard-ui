"use client"
import { useState } from "react"
import Link from "next/link";

const Navbar = () => {
    const [ search, setSearch] = useState('');
    return (

        
        <div className="bg-white flex mx-4  h-20 mb-4 shadow-sm items-center justify-between  top-0">
            
                <div className="w-64">
                        
                        <label className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow px-2 ring-0" placeholder="Search.."  onChange={(e) => setSearch(e.target.value)} value={search}  />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                    fill-rule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clip-rule="evenodd" />
                                </svg>
                        </label>
                </div>

                <div className="flex-row flex justify-end items-center gap-2">
                    <Link href="#">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor" 
                         className="icon icon-tabler icons-tabler-filled icon-tabler-message">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M18 3a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-4.724l-4.762 2.857a1 1 0 0 1 -1.508 -.743l-.006 -.114v-2h-1a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-8a4 4 0 0 1 4 -4zm-4 9h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m2 -4h-8a1 1 0 1 0 0 2h8a1 1 0 0 0 0 -2" />
                        </svg>
                    </Link>

                    <Link href="#" className="relative">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none" 
                     stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  
                     stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-bell">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                        </svg>

                        <div className="absolute top-0 right-2 bg-puprle-600 h-6 w-6 rounded-full">
                            <span className="tex-sm text-white">1</span>
                        </div>
                    </Link>

                    <Link href={"#"} className="flex flex-col">
                    <h1 className="text-sm font-semibold">Takondwa Kapyola</h1>
                    <span className="text-xs text-grsy-600">admin</span>
                    </Link>
                </div>

        </div>
    
    

)}

export default Navbar;

