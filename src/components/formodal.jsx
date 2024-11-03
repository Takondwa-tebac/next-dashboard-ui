"use client";

import { useState } from "react";

export default function FormModal({ table, type, id, data }) {
  const size = type === "create" ? "w-10 h-10" : "w-12 p-1";
  const bgColor =
    type === "create" ? "bg-yellow-200" : type === "update" ? "bg-green-200" : "bg-purple-200";
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${size} text-xs text-white ${bgColor} rounded-md`}
      >
        {type}
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-md p-4 relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <button
              className="w-6 h-6 bg-gray-200 rounded-full absolute top-4 right-4 flex items-center justify-center cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <span className="text-black text-lg font-bold">X</span>
            </button>

            <div className="my-2 bg-gray-100  w-full p-4 rounded-md">
              <span className="text-xl font-bold text-white">
                {type} {table}
              </span>
            </div>

            {/* Add your form or other content here */}
          </div>
        </div>
      )}
    </>
  );
}
