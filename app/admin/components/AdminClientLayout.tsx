"use client";

import { ReactNode } from "react";
import AdminSidebar from "./AdminSidebar";

interface AdminClientLayoutProps {
  children: ReactNode;
}

export default function AdminClientLayout({ children }: AdminClientLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
} 