"use client";
import React, { useState } from "react";
import { useAppDispatch } from "../../store/hook";
import { setLogoutUser } from "../../store/auth-slice";
import { useRouter } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => setOpen(!open);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(setLogoutUser(null));
    router.push("/login");
  };

  return (
    <header className="sticky top-0 z-10 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      <h2 className="text-lg font-semibold text-slate-800">Welcome, Ankit</h2>

      {/* Avatar with dropdown */}
      <div className="relative">
        <div 
          onClick={toggleDropdown}
          className="w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm font-semibold cursor-pointer select-none"
        >
          A
        </div>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white border border-slate-200 rounded-md shadow-lg overflow-hidden">
            <button
              className="w-full text-left px-4 py-2 hover:bg-slate-100 text-slate-800"
              onClick={() => alert("Profile clicked")}
            >
              Profile
            </button>
            <button
              className="w-full text-left px-4 py-2 hover:bg-slate-100 text-slate-800"
              onClick={() => {
                handleLogout();
                // optional alert
                // alert("Logged out successfully");
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

