'use client';


import React, { useEffect, useState } from 'react';

import {
  PencilIcon,
  TrashIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';
import { useAppDispatch, useAppSelector } from '@/src/lib/store/hook';
import { deleteCategory, fetchCategory } from '@/src/lib/store/category-slice';
import Modal from '@/src/lib/components/modal/categoryModal';



export default function CategoryInstitute() {
  const dispatch = useAppDispatch();
  const {category} = useAppSelector((store)=>store.category)

  const [searchedText, setSearchedText] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closedModal = () => setIsModalOpen(false);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const handleDelete = (id: string) => {
    id && dispatch(deleteCategory(id));
  };

  const filteredData = category.filter((item) =>
    item.categoryName.toLowerCase().includes(searchedText.toLowerCase()) ||
    item.id.includes(searchedText) 
   
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-6">

        {isModalOpen && <Modal closedModal={closedModal} />}

        {/* Header + Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Category Management
          </h2>

          <div className="flex items-center gap-3">
            <div className="relative text-gray-500">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z"
                    stroke="#9CA3AF"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>

              <input
                type="text"
                placeholder="Search category..."
                onChange={(e) => setSearchedText(e.target.value)}
                className="w-72 h-11 pl-10 pr-4 rounded-full border border-gray-300 text-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              onClick={openModal}
              className="px-5 py-2.5 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
            >
              + Create Category
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <table className="min-w-full text-left text-sm text-gray-700">
            <thead className="bg-gray-100 text-gray-900 font-semibold">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Name</th>
          
          
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {filteredData.length > 0 ? (
                filteredData.map((cat) => (
                  <tr
                    key={cat.id}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-3">{cat.id}</td>
                    <td className="px-6 py-3 font-medium">
                      {cat.categoryName}
                    </td>
                

                    <td className="px-6 py-3">
                      <div className="flex justify-center gap-3">
                        <button className="p-2 bg-indigo-100 rounded-full hover:bg-indigo-200 transition">
                          <PencilIcon className="w-5 h-5 text-indigo-600" />
                        </button>

                        <button
                          onClick={() => handleDelete(cat.id)}
                          className="p-2 bg-red-100 rounded-full hover:bg-red-200 transition"
                        >
                          <TrashIcon className="w-5 h-5 text-red-600" />
                        </button>

                        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                          <EllipsisHorizontalIcon className="w-5 h-5 text-gray-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-8 text-gray-500 text-lg"
                  >
                    😕 No categories found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
