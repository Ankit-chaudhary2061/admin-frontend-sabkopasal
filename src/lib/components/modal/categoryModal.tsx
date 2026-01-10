'use client';
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { Category } from "../../types/data-types";
import { Status } from "../../types/status-types";
import { ICategory } from "../../types/category-types";
import { addCategory, fetchCategory } from "../../store/category-slice";


interface ModalProps {
  closedModal: () => void;
}

const Modal = ({ closedModal }: ModalProps) => {
  const dispatch = useAppDispatch();
const {status} = useAppSelector((store)=> store.category)
  const [categoryData, setCategoryData] = useState<ICategory>({
    categoryName: "",
 
  });

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCategoryData({
      ...categoryData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(addCategory(categoryData));
    dispatch(fetchCategory())
    if(status === Status.SUCCESS){
        closedModal();
    }
 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition"
        onClick={closedModal}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-xl shadow-2xl transform transition-transform duration-300 scale-100 hover:scale-105">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Create Category
          </h3>
          <button
            onClick={closedModal}
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <svg
              className="h-5 w-5 text-gray-600 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body: Form */}
        <form className="space-y-5" onSubmit={handleSubmission}>
          {/* Category Name */}
          <div>
            <label
              htmlFor="category_name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Category Name
            </label>
            <input
              type="text"
              id="category_name"
              name="categoryName"
              placeholder="green tea"
              required
              value={categoryData.categoryName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 transition"
            />
          </div>

          {/* Category Description */}
       

          {/* Actions */}
          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={closedModal}
              className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 dark:from-indigo-500 dark:to-violet-500 dark:hover:from-indigo-600 dark:hover:to-violet-600 transition flex items-center justify-center gap-2"
            >
              Create Category
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
