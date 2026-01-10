
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Layers,
  User,
} from "lucide-react";
import { useAppDispatch } from "../../store/hook";
import { useEffect } from "react";
import { fetchOrder, fetchProduct, fetchUsers } from "../../store/data-slice";

const menu = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Products",
    href: "/dashboard/product",
    icon: Users,
  },
  {
    name: "Orders",
    href: "/dashboard/order",
    icon: GraduationCap,
  },
  {
    name: "Users",
    href: "/dashboard/user",
    icon: Layers,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchOrder())
    dispatch(fetchProduct())
    dispatch(fetchUsers())


  },[])
  return (
    <nav className="flex flex-col gap-6">
      {/* ⭐ Profile Card */}
      <div className="flex items-center gap-3 px-4 py-4 bg-[#F5F6FF] rounded-xl">
        <div className="relative w-11 h-11 rounded-full overflow-hidden border">
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-800">
            Ankit Chaudhary
          </h2>
          <p className="text-xs text-gray-500">@ankit_dev</p>
        </div>
      </div>

      {/* 🔗 Menu */}
      <div className="flex flex-col gap-1">
        {menu.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition
                ${
                  isActive
                    ? "bg-[#6C63FF] text-white shadow"
                    : "text-gray-600 hover:bg-[#F5F6FF]"
                }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* 👤 Profile Link */}
      <div className="mt-auto">
        <Link
          href="/dashboard/profile"
          className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition
            ${
              pathname === "/dashboard/profile"
                ? "bg-[#6C63FF] text-white shadow"
                : "text-gray-600 hover:bg-[#F5F6FF]"
            }`}
        >
          <User size={18} />
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
