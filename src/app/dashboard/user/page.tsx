
'use client'

import { fetchUsers } from "@/src/lib/store/data-slice";
import { useAppDispatch, useAppSelector } from "@/src/lib/store/hook";

import { useEffect, useState } from "react";




const UserPage = () => {
const dispatch =useAppDispatch()
  const [searchedText, setSearchedText] = useState<string>("");

const { users} = useAppSelector((store)=>store.datas)
console.log(users)
useEffect(()=>{
    dispatch(fetchUsers())
},[])
const userFilter = users.filter((user)=> user.username.toLowerCase().includes(searchedText.toLowerCase()) ||
      user.email.includes(searchedText) ||
      user.id.includes(searchedText))
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-6">

        {/* {isModalOpen && <TeacherModal closedModal={closedModal} />} */}

        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            users
          </h2>

          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search teacher..."
                onChange={(e) => setSearchedText(e.target.value)}
                className="w-72 h-11 pl-10 pr-4 rounded-full border border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
              />

              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>

            
          </div>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <table className="min-w-full text-left text-sm text-gray-700">
            <thead className="bg-gray-100 text-gray-900 font-semibold">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
           
             
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {userFilter.length > 0 ? (
                userFilter.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-3">{user.id}</td>
                    <td className="px-6 py-3 font-medium">{user.username}</td>
                    <td className="px-6 py-3">{user.email}</td>
                    

               
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-8 text-gray-500 text-lg"
                  >
                    😕 No teachers found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export default UserPage;