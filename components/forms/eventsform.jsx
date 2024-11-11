"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function EventsForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form
      action="#"
      method="post"
      onSubmit={handleSubmit((formData) => setData(formData))}
    >
        <div className="my-2">
            <pre>{ Object.values(data)}</pre>
        </div>
      <div className="form-control">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="input w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter Name"
          {...register("name")}
        />
      </div>

      <div className="form-control w-full mt-4">
        <label htmlFor="class" className="text-sm font-medium text-gray-700">
          Class
        </label>
        <input
          type="text"
          id="class"
          name="class"
          className="input w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter Class"
          {...register("class")}
        />
      </div>

      <div className="form-control mt-4">
        <button
          type="submit"
          className="bg-black py-2 px-4 text-white hover:bg-black/80 rounded-md"
        >
          Save
        </button>
      </div>
    </form>
  );
}
