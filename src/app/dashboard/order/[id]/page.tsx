
'use client'

import { singleOrder } from "@/src/lib/store/data-slice";
import { useAppDispatch, useAppSelector } from "@/src/lib/store/hook";
import { useParams } from "next/navigation";
import { ChangeEvent, useEffect } from "react";

const SingleOrder = () => {
  const params = useParams();
  const id = params.id as string;

  const dispatch = useAppDispatch();
  const { singleOrder: [order] } = useAppSelector((store) => store.datas);

  useEffect(() => {
    if (id) dispatch(singleOrder(id));
  }, [id, dispatch]);

  const handleOrderStatus = (e: ChangeEvent<HTMLSelectElement>) => {};

  return (
  <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-8">
  <div className="max-w-7xl mx-auto space-y-8">

    {/* Header */}
   <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
  <div>
    <h1 className="text-2xl font-bold text-gray-800">
      Order Details
    </h1>

    <div className="mt-1 space-y-0.5 text-sm text-gray-500">
      <p>
        <span className="font-medium text-gray-700">Order ID:</span>{" "}
        {order?.id}
      </p>
      <p>
        <span className="font-medium text-gray-700">Created At:</span>{" "}
        {order?.createdAt
          ? new Date(order.createdAt).toLocaleString()
          : "-"}
      </p>
    </div>
  </div>

  {/* Status Badge */}
  <span className="self-start sm:self-center px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-700">
    {order?.Order?.orderStatus}
  </span>
</div>


    {/* Main Content */}
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

      {/* LEFT SECTION */}
      <div className="xl:col-span-2 space-y-6">

        {/* Product Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Product Information
          </h2>

          <div className="flex flex-col md:flex-row gap-6">

            {/* Product Image */}
            <div className="w-full md:w-40 h-40 rounded-lg border bg-gray-50 flex items-center justify-center overflow-hidden">
              {order?.Product?.productImageUrl ? (
                <img
                  src={order.Product.productImageUrl}
                  alt="Product"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-sm text-gray-400">No Image</span>
              )}
            </div>

            {/* Product Details */}
            <div className="flex-1 flex justify-between">
              <div className="space-y-2">
                <p className="text-xl font-semibold text-gray-900">
                  {order?.Product?.productName}
                </p>
                <p className="text-sm text-gray-500">
                  Quantity: {order?.quantity}
                </p>
                <p className="text-sm text-gray-500">
                  Price per item: Rs. {order?.Product?.productPrice}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500">Subtotal</p>
                <p className="text-lg font-bold text-gray-900">
                  Rs. {order?.Product?.productPrice * order?.quantity}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Order Summary
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-medium text-gray-800">
                {order?.Order?.Payment?.paymentMethod}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Payment Status</span>
              <span className="font-medium text-gray-800">
                {order?.Order?.Payment?.paymentStatus}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Order Status</span>
              <span className="font-medium text-gray-800">
                {order?.Order?.orderStatus}
              </span>
            </div>
          </div>

          <div className="border-t pt-4 flex justify-between font-semibold text-gray-900">
            <span>Total (incl. delivery)</span>
            <span>
              Rs. {order?.Product?.productPrice * order?.quantity + 200}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="space-y-6">

        {/* Customer Info */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Customer Information
          </h2>

          <div className="space-y-3 text-sm text-gray-700">
            <p><strong>Name:</strong> {order?.Order?.User?.username}</p>
            <p><strong>Address:</strong> {order?.Order?.shippingAddress}</p>
            <p><strong>Phone:</strong> {order?.Order?.phoneNumber}</p>
          </div>
        </div>

        {/* Admin Controls */}
        <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Admin Actions
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Update Order Status
            </label>
            <select
              onChange={handleOrderStatus}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="pending">Pending</option>
              <option value="preparation">Preparation</option>
              <option value="ontheway">On the way</option>
              <option value="delivered">Delivered</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Update Payment Status
            </label>
            <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:ring-2 focus:ring-indigo-500 outline-none">
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
            </select>
          </div>

          <button className="w-full mt-4 rounded-lg bg-red-600 py-2 text-white font-semibold hover:bg-red-700 transition">
            Delete Order
          </button>
        </div>
      </div>

    </div>
  </div>
</div>

  );
};

export default SingleOrder;
