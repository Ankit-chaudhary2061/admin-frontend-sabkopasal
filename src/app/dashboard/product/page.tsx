'use client'


import { deleteProduct, fetchProduct } from "@/src/lib/store/data-slice";
import { useAppDispatch, useAppSelector } from "@/src/lib/store/hook";
import { useEffect, useState } from "react";
import {
  PencilIcon,
  TrashIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

const product = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((store) => store.datas);
  const [searchedText, setSearchedText] = useState<string>("");
console.log(products,':product')
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
const filterProduct = products.filter((product) =>
  product.productName.toLowerCase().includes(searchedText.toLowerCase()) ||
  product.Category?.categoryName
    ?.toLowerCase()
    .includes(searchedText.toLowerCase()) ||
  product.productPrice
    .toString()
    .includes(searchedText)
);
const handleDelete = async (id: string) => {
  if (!id) return;

  await dispatch(deleteProduct(id));
  dispatch(fetchProduct());
};


  return (
   <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-6">

        {/* {isModalOpen && <TeacherModal closedModal={closedModal} />} */}

        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Product
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

            <button
              // onClick={openModal}
              className="px-5 py-2.5 bg-green-600 text-white rounded-full shadow hover:bg-green-700 transition"
            >
              + Add Products
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <table className="min-w-full text-left text-sm text-gray-700">
            <thead className="bg-gray-100 text-gray-900 font-semibold">
              <tr>
                 <th className="px-6 py-3"></th>
                <th className="px-6 py-3">Product Name</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Stock</th>
                <th className="px-6 py-3">Created At</th>

                
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {filterProduct.length > 0 ? (
                filterProduct.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-3">
  <div className="h-12 w-12 overflow-hidden rounded-lg border bg-gray-100">
    <img
      src={product.productImageUrl || "/placeholder.png"}
      alt={product.productName}
      className="h-full w-full object-cover"
    />
  </div>
</td>

                    <td className="px-6 py-3">{product.productName}</td>
                    <td className="px-6 py-3 font-medium">{product?.Category?.categoryName || "—"}</td>
                    <td className="px-6 py-3"> rs {product.productPrice}</td>
                    <td className="px-6 py-3"> {product.productTotalStockQty}</td>
                    <td className="px-6 py-3"> {product?.createdAt
    ? new Date(product.createdAt).toLocaleDateString()
    : "—"}</td>
                   

                    <td className="px-6 py-3">
                      <div className="flex justify-center gap-3">
                        <button className="p-2 bg-indigo-100 rounded-full hover:bg-indigo-200 transition">
                          <PencilIcon className="w-5 h-5 text-indigo-600" />
                        </button>

                        <button
                        onClick={() =>  handleDelete(product.id)}
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
                    colSpan={7}
                    className="text-center py-8 text-gray-500 text-lg"
                  >
                    😕 No products found
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

export default product;