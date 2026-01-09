"use client";
import React, { ReactNode } from "react";
import Sidebar from "./sidebar";

type DashboardProps = {
  children?: ReactNode;
};

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col fixed h-full">
        <div className="p-6 font-bold text-purple-700 text-2xl border-b">
          AdminPanel
        </div>
        <Sidebar />
      </aside>

      {/* Main content */}
      {/* Added margin-left to create space for sidebar */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-purple-700">Dashboard</h1>
          {/* <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
              SR
            </div>
          </div> */}
        </header>

        {/* Main area */}
        <main className="p-6 space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
