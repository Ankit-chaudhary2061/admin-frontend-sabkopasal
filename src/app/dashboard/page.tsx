// import { useAppSelector } from "@/src/lib/store/hook";
// import React from "react";

// const Dashboard = () => {

//   const {orders, users, products}=useAppSelector((store)=>store.datas)
//   const count ={
//     orderCounts :orders.length,
//     userCounts :users.length,
//     productCounts :products.length
//   }
//   return (
//     <div className="p-6 bg-[#FAFAFA] min-h-screen font-sans">
//       {/* Top Section */}
//       <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
//         {/* Balance */}
//         <div className="bg-[#E6F4EA] p-6 rounded-xl shadow flex-1">
//           <p className="text-gray-500">Balance</p>
//           <h2 className="text-2xl font-bold text-gray-900">{count.orderCounts}</h2>
//           <span className="text-green-600 font-medium mt-1 inline-block">+17%</span>
//         </div>

//         {/* Sales */}
//         <div className="bg-[#FFF4E6] p-6 rounded-xl shadow flex-1">
//           <p className="text-gray-500">Sales</p>
//           <h2 className="text-2xl font-bold text-gray-900">{count.productCounts}</h2>
//           <span className="text-yellow-600 font-medium mt-1 inline-block">+23%</span>
//         </div>

//         {/* Upgrade */}
//         <div className="bg-[#E6EAFF] p-6 rounded-xl shadow flex-1 flex items-center justify-center">
//           <button className="bg-[#6C63FF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5952CC] transition">
//             {count.userCounts}
//           </button>
//         </div>
//       </div>

//       {/* Middle Section */}
//       <div className="flex flex-col md:flex-row gap-4 mb-6">
//         {/* User in the Last Week */}
//         <div className="bg-white p-6 rounded-xl shadow flex-1">
//           <p className="text-gray-500">User in the Last Week</p>
//           <h2 className="text-2xl font-bold mt-1 text-gray-900">+3.2%</h2>
//           <div className="flex gap-2 mt-4">
//             {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
//               <div key={index} className="flex-1 bg-gray-200 h-24 rounded-lg relative">
//                 <div className={`bg-gray-900 w-full rounded-lg absolute bottom-0`} style={{ height: `${Math.random() * 100}%` }}></div>
//                 <p className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 text-xs text-gray-500">{day}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Monthly Profits */}
//         <div className="bg-white p-6 rounded-xl shadow flex-1">
//           <p className="text-gray-500">Monthly Profits</p>
//           <h2 className="text-2xl font-bold mt-1 text-gray-900">$76,356</h2>
//           <div className="mt-4 flex flex-col gap-2">
//             <p>Giveaway: <span className="text-[#6C63FF] font-medium">60%</span></p>
//             <p>Affiliate: <span className="text-[#8F83FF] font-medium">24%</span></p>
//             <p>Offline Sales: <span className="text-[#B9B4FF] font-medium">16%</span></p>
//           </div>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="grid md:grid-cols-2 gap-4">
//         {/* Recent Sales */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-lg font-semibold mb-4 text-gray-900">Recent Sales</h2>
//           {[
//             { name: "Steven Summer", amount: "$52.00", time: "02 Minutes Ago" },
//             { name: "Jordan Maizee", amount: "$83.00", time: "02 Minutes Ago" },
//             { name: "Jessica Alba", amount: "$61.60", time: "05 Minutes Ago" },
//             { name: "Anna Armas", amount: "$2351.00", time: "05 Minutes Ago" },
//             { name: "Angelina Boo", amount: "$152.00", time: "10 Minutes Ago" },
//           ].map((sale, index) => (
//             <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
//               <div>
//                 <p className="font-medium text-gray-900">{sale.name}</p>
//                 <p className="text-gray-400 text-sm">{sale.time}</p>
//               </div>
//               <p className="font-semibold text-gray-900">{sale.amount}</p>
//             </div>
//           ))}
//         </div>

//         {/* Last Orders */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-lg font-semibold mb-4 text-gray-900">Last Orders</h2>
//           {[
//             { name: "David Astee", amount: "$1,456", status: "Chargeback", date: "11 Sep 2022" },
//             { name: "Maria Hulama", amount: "$42,4378", status: "Completed", date: "11 Sep 2022" },
//             { name: "Arnold Swarz", amount: "$3,412", status: "Completed", date: "11 Sep 2022" },
//           ].map((order, index) => (
//             <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
//               <div>
//                 <p className="font-medium text-gray-900">{order.name}</p>
//                 <p className="text-gray-400 text-sm">{order.date}</p>
//               </div>
//               <div className="text-right">
//                 <p className="font-semibold text-gray-900">{order.amount}</p>
//                 <p className={`text-sm ${order.status === "Completed" ? "text-green-500" : "text-red-500"}`}>{order.status}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
"use client";

import { useAppSelector } from "@/src/lib/store/hook";
import React from "react";

const Dashboard = () => {
  const { orders, users, products } = useAppSelector(
    (store) => store.datas
  );

  const count = {
    orderCounts: orders.length,
    userCounts: users.length,
    productCounts: products.length,
  };

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen font-sans">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Orders */}
        <div className="rounded-xl p-6 shadow-sm border bg-gradient-to-br from-blue-50 to-blue-100">
          <p className="text-blue-600 text-sm font-medium">
            Total Orders
          </p>
          <h2 className="text-3xl font-bold text-blue-900 mt-2">
            {count.orderCounts}
          </h2>
          <p className="text-xs text-blue-500 mt-1">
            All time orders
          </p>
        </div>

        {/* Products */}
        <div className="rounded-xl p-6 shadow-sm border bg-gradient-to-br from-green-50 to-green-100">
          <p className="text-green-600 text-sm font-medium">
            Total Products
          </p>
          <h2 className="text-3xl font-bold text-green-900 mt-2">
            {count.productCounts}
          </h2>
          <p className="text-xs text-green-500 mt-1">
            Products in store
          </p>
        </div>

        {/* Users */}
        <div className="rounded-xl p-6 shadow-sm border bg-gradient-to-br from-purple-50 to-purple-100">
          <p className="text-purple-600 text-sm font-medium">
            Registered Users
          </p>
          <h2 className="text-3xl font-bold text-purple-900 mt-2">
            {count.userCounts}
          </h2>
          <p className="text-xs text-purple-500 mt-1">
            Total customers
          </p>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* User Growth */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <p className="text-gray-500 font-medium">
            New Users (Last 7 Days)
          </p>
          <h2 className="text-2xl font-bold mt-2 text-gray-900">
            {users.length}
          </h2>

          <div className="flex gap-2 mt-6 items-end h-28">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
              <div key={i} className="flex-1 text-center">
                <div className="bg-gradient-to-t from-purple-500 to-purple-300 rounded-md w-full h-[60%]" />
                <p className="text-xs text-gray-400 mt-2">
                  {day}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Breakdown */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <p className="text-gray-500 font-medium">
            Revenue Overview
          </p>
          <h2 className="text-2xl font-bold mt-2 text-gray-900">
            Activity Summary
          </h2>

          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-blue-600">
                Online Orders
              </span>
              <span className="font-semibold text-blue-900">
                {count.orderCounts}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-green-600">
                Products Sold
              </span>
              <span className="font-semibold text-green-900">
                {count.productCounts}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-purple-600">
                Active Users
              </span>
              <span className="font-semibold text-purple-900">
                {count.userCounts}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Users */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">
            Recently Joined Users
          </h2>

          {users.slice(0, 5).map((user, i) => (
            <div
              key={i}
              className="flex justify-between items-center py-2 border-b last:border-b-0"
            >
              <p className="font-medium text-gray-800">
                {user.username || "New User"}
              </p>
              <span className="text-xs text-purple-500 font-medium">
                New
              </span>
            </div>
          ))}
        </div>

        {/* Latest Orders */}
        <div className="bg-white p-6 rounded-xl shadow-sm border">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">
            Latest Orders
          </h2>

          {orders.slice(0, 5).map((order, i) => (
            <div
              key={i}
              className="flex justify-between items-center py-2 border-b last:border-b-0"
            >
              <p className="font-medium text-gray-800">
                Order #{order.id || i + 1}
              </p>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                Processing
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
