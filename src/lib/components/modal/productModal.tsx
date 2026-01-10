// 'use client';
// import { ChangeEvent, FormEvent, useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../../store/hook";
// import { Product } from "../../types/data-types";
// import { addProduct } from "../../store/data-slice";
// import { Status } from "../../types/status-types";


// interface ModalProps {
//   closedModal: () => void;
// }

// const ProductModal = ({ closedModal }: ModalProps) => {
//   const dispatch = useAppDispatch();
// const {status, products} = useAppSelector((store)=>store.datas)
  

//  const [productData, setProductData] = useState<Product>({
//   productDescription:'',
//     productImageUrl:'',
//     productName:'',
//     categoryId:'',
//     productPrice:0,
//     userId:'',
//     productTotalStockQty:0
// });







// // useEffect(() => {
// //   console.log("Updated courses:", courses);
// // }, [courses]);

// // // Fetch only once
// // useEffect(() => {
// //   dispatch(fetchInstituteCourse());
// // }, []);




//   // Handle input changes
//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value, type, files } = e.target as HTMLInputElement;

//     if (type === "file" && files) {
//       setProductData({ ...productData, [name]: files[0] });
//     } else {
//       setProductData({ ...productData, [name]: value });
//     }
//   };

//   // Form submission
//  const handleSubmission = async (e: FormEvent<HTMLFormElement>) => {
//   e.preventDefault()
//         await dispatch(addProduct(productData))
//           if (status === Status.SUCCESS) {
//       closedModal();                 // close modal
      
//     }
      
// };
// // useEffect(() => {
// //   dispatch(fetchInstituteCourse());
// // }, []);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       <div
//         className="fixed inset-0 bg-black/60 backdrop-blur-sm transition"
//         onClick={closedModal}
//       ></div>

//       <div className="relative w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-xl shadow-2xl">
//         <div className="flex items-center justify-between mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
//           <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Create Product</h3>
//           <button
//             onClick={closedModal}
//             className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
//           >
//             <svg
//               className="h-5 w-5 text-gray-600 dark:text-gray-300"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

//         <form className="space-y-5" onSubmit={handleSubmission}>
//           {/* Teacher Name */}
//           <div>
//             <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
//               Product Name
//             </label>
//             <input
//               type="text"
//               name="productName"
//               placeholder="orthdox golden tea"
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-lg dark:bg-gray-800 border-gray-300 dark:border-gray-700"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
//               Email
//             </label>
//             <input
//               type="email"
//               name="teacherEmail"
//               placeholder="seasonshrestha@gmail.com"
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-lg dark:bg-gray-800 border-gray-300 dark:border-gray-700"
//             />
//           </div>

//           {/* Teacher Photo */}
//           <div>
//             <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
//               Teacher Photo
//             </label>
//             <input
//               type="file"
//               name="teacherPhoto"
//               accept="image/*"
//               onChange={handleChange}
//               className="w-full p-2 border rounded-lg dark:bg-gray-800 border-gray-300 dark:border-gray-700"
//             />
//           </div>

//           {/* Phone + Course */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 name="teacherPhoneNumber"
//                 placeholder="98*******"
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border rounded-lg dark:bg-gray-800 border-gray-300 dark:border-gray-700"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
//                 Teacher Course
//               </label>
//               {/* <select
//                 name="courseId"
//                 className="w-full p-3 border rounded-lg dark:bg-gray-800 border-gray-300 dark:border-gray-700"
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select a Category</option>
//                 {courses.length > 0 ? (
//                   courses.map((course) => (
//                     <option value={course.id}>{course.courseName}</option>
//                   ))
//                 ) : (
//                   <option disabled>No courses available</option>
//                 )}
//               </select> */}
//             </div>
//           </div>

//           {/* Experience */}
//           <div>
//             <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
//               Teacher Experience
//             </label>
//             <input
//               type="text"
//               name="teacherExperience"
//               placeholder="2 years experience with JavaScript"
//               onChange={handleChange}
//               required
//               className="w-full p-3 border rounded-lg dark:bg-gray-800 border-gray-300 dark:border-gray-700"
//             />
//           </div>

//           {/* Joined + Salary */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
//                 Joined Date
//               </label>
//               <input
//                 type="date"
//                 name="teacherJoinedDate"
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border rounded-lg dark:bg-gray-800 border-gray-300 dark:border-gray-700"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
//                 Salary
//               </label>
//               <input
//                 type="number"
//                 name="teacherSalary"
//                 placeholder="50000"
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 border rounded-lg dark:bg-gray-800 border-gray-300 dark:border-gray-700"
//               />
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-end gap-3 mt-4">
//             <button
//               type="button"
//               onClick={closedModal}
//               className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700 transition"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-5 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 transition"
//             >
//               Create Teacher
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProductModal;


'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { Product } from "../../types/data-types";
import { addProduct, fetchProduct} from "../../store/data-slice";
import { Status } from "../../types/status-types";
import { fetchCategory } from "../../store/category-slice";

interface ModalProps {
  closedModal: () => void;
}

const ProductModal = ({ closedModal }: ModalProps) => {
  const dispatch = useAppDispatch();

  const { status } = useAppSelector((store) => store.datas);
const {category} = useAppSelector((store)=>store.category)
console.log(category,': category')
  const [productData, setProductData] = useState<Product>({
    productName: "",
    productDescription: "",
    productImageUrl: null,
    productPrice: 0,
    productTotalStockQty: 0,
    categoryId: "",
  });

  // Fetch categories
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProduct())
  }, [dispatch]);

  // Handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, files } = e.target as HTMLInputElement;

   if (type === "file" && files) {
      setProductData({ ...productData, [name]: files[0] });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  // Submit form
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await dispatch(addProduct(productData));
    dispatch(fetchProduct())


    if (status === Status.SUCCESS) {
      closedModal();
    }
  };

  return (
<div className="fixed inset-0 z-50 flex items-center justify-center px-4">
  {/* Backdrop */}
  <div
    className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
    onClick={closedModal}
  />

  {/* Modal */}
  <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-xl animate-fadeIn">
    {/* Header */}
    <div className="flex items-center justify-between border-b px-6 py-4">
      <h2 className="text-lg font-semibold text-gray-900">
        Create Product
      </h2>
      <button
        onClick={closedModal}
        className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
      >
        ✕
      </button>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-5 px-6 py-5">
      {/* Product Name */}
      <div>
        <label className="block text-xs font-semibold uppercase text-gray-700">
          Product Name
        </label>
        <input
          name="productName"
          required
          onChange={handleChange}
          placeholder="Eg. Black Tea"
          className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-black placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-xs font-semibold uppercase text-gray-700">
          Description
        </label>
        <textarea
          name="productDescription"
          rows={3}
          placeholder="Short product description..."
          onChange={handleChange}
          className="mt-1 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm text-black placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-xs font-semibold uppercase text-gray-700">
          Category
        </label>
        <select
          name="categoryId"
          value={productData.categoryId}
          required
          onChange={handleChange}
          className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-black focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none"
        >
          <option value="" className="text-gray-400">Select category</option>
          {category.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.categoryName}
            </option>
          ))}
        </select>
      </div>

      {/* Price & Stock */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase text-gray-700">
            Price
          </label>
          <input
            type="number"
            name="productPrice"
            placeholder="0.00"
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-black placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-gray-700">
            Stock
          </label>
          <input
            type="number"
            name="productTotalStockQty"
            placeholder="0"
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-black placeholder-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none"
          />
        </div>
      </div>

      {/* Image */}
      <div>
        <label className="block text-xs font-semibold uppercase text-gray-700">
          Product Image
        </label>
        <div className="mt-1 flex items-center justify-center rounded-xl border-2 border-dashed border-gray-300 p-4 hover:border-indigo-500 transition">
          <input
            name="image"
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-indigo-600 hover:file:bg-indigo-100"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-4">
        <button
          type="button"
          onClick={closedModal}
          className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={!productData.categoryId}
          className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Create Product
        </button>
      </div>
    </form>
  </div>
</div>


  );
};

export default ProductModal;
