// "use client";
// import React, { ReactNode } from "react";
// import Sidebar from "./sidebar";

// type DashboardProps = {
//   children?: ReactNode;
// };

// const Dashboard = ({ children }: DashboardProps) => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md flex flex-col fixed h-full">
//         <div className="p-6 font-bold text-purple-700 text-2xl border-b">
//           AdminPanel
//         </div>
//         <Sidebar />
//       </aside>

//       {/* Main content */}
//       {/* Added margin-left to create space for sidebar */}
//       <div className="flex-1 flex flex-col ml-64">
//         {/* Header */}
//         <header className="bg-white shadow-md p-4 flex justify-between items-center">
//           <h1 className="text-xl font-bold text-purple-700">Dashboard</h1>
//           {/* <div className="flex items-center gap-4">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//             />
//             <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
//               SR
//             </div>
//           </div> */}
//         </header>

//         {/* Main area */}
//         <main className="p-6 space-y-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// "use client";
// import React, { ReactNode } from "react";
// import Sidebar from "./sidebar";

// type DashboardProps = {
//   children?: ReactNode;
// };

// const Dashboard = ({ children }: DashboardProps) => {
//   return (
//     <div className="flex min-h-screen bg-slate-50">
//       {/* Sidebar */}
//       <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-slate-200 flex flex-col">
//         {/* Logo */}
//         <div className="h-16 flex items-center px-6 border-b border-slate-200">
//           <h1 className="text-xl font-semibold text-indigo-600 tracking-tight">
//             AdminPanel
//           </h1>
//         </div>

//         {/* Menu */}
//         <div className="flex-1 overflow-y-auto px-3 py-4">
//           <Sidebar />
//         </div>
//       </aside>

//       {/* Main Content */}
//       <div className="ml-64 flex-1 flex flex-col">
//         {/* Header */}
//         <header className="sticky top-0 z-10 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
//           <h2 className="text-lg font-semibold text-slate-800">
//             Dashboard
//           </h2>

//           {/* Right actions */}
//           <div className="flex items-center gap-4">
//             {/* Avatar */}
//             <div className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold">
//               A
//             </div>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 p-6 space-y-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


"use client";
import React, { ReactNode } from "react";
import Sidebar from "./sidebar";
import Header from "./header"; // import the new Header component

type DashboardProps = {
  children?: ReactNode;
};

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-slate-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-slate-200">
          <h1 className="text-xl font-semibold text-indigo-600 tracking-tight">
            AdminPanel
          </h1>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4">
          <Sidebar />
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64 flex-1 flex flex-col">
        {/* Header Component */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 p-6 space-y-6">{children}</main>
      </div>
    </div>
  );
};

export default Dashboard;
