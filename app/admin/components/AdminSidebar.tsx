"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaBlog, FaBriefcase, FaSignOutAlt } from "react-icons/fa";

const menuItems = [
  { href: "/admin", label: "Dashboard", icon: FaHome },
  { href: "/admin/posts", label: "Blog Posts", icon: FaBlog },
  { href: "/admin/works", label: "Works", icon: FaBriefcase },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const handleLogout = () => {
    // TODO: Implement logout functionality
    console.log("Logout clicked");
  };

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 ${
                pathname === item.href ? "bg-gray-100 border-l-4 border-blue-500" : ""
              }`}
            >
              <Icon className="mr-3" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="absolute bottom-0 w-64 p-4 border-t">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
        >
          <FaSignOutAlt className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
} 