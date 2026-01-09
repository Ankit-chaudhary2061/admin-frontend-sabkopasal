import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Layers,
  BookOpen,
  User,
} from "lucide-react";

const Sidebar = () => {
  return (
    <nav className="flex-1 mt-4 flex flex-col gap-3">
      {/* 🌟 Profile Section */}
      <div className="flex items-center gap-3 px-4 py-3 bg-purple-50 rounded-lg shadow-sm">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="/profile.jpg" // <-- replace with your image
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="text-gray-800 font-semibold text-sm">Ankit Chaudhary</h2>
          <p className="text-xs text-gray-500">@ankit_dev</p>
        </div>
      </div>

      {/* 🔗 Navigation Links */}
      <Link
        href="/dashboard"
        className="flex items-center gap-2 py-2 px-4 text-gray-700 hover:bg-purple-100 rounded-md transition-colors text-sm"
      >
        <LayoutDashboard size={16} /> Dashboard
      </Link>

      <Link
        href="/dashboard/product"
        className="flex items-center gap-2 py-2 px-4 text-gray-700 hover:bg-purple-100 rounded-md transition-colors text-sm"
      >
        <Users size={16} /> product
      </Link>

      <Link
        href="/dashboard/order"
        className="flex items-center gap-2 py-2 px-4 text-gray-700 hover:bg-purple-100 rounded-md transition-colors text-sm"
      >
        <GraduationCap size={16} /> orders
      </Link>

      <Link
        href="/dashboard/user"
        className="flex items-center gap-2 py-2 px-4 text-gray-700 hover:bg-purple-100 rounded-md transition-colors text-sm"
      >
        <Layers size={16} /> user
      </Link>

    

      <Link
        href="/dashboard/profile"
        className="flex items-center gap-2 py-2 px-4 text-gray-700 hover:bg-purple-100 rounded-md transition-colors text-sm mt-1"
      >
        <User size={16} /> Profile
      </Link>
    </nav>
  );
};

export default Sidebar;
