"use client";

import { ReactNode } from "react";
import { redirect } from "next/navigation";
import AdminClientLayout from "./components/AdminClientLayout";

interface AdminLayoutProps {
  children: ReactNode;
}

export default async function AdminLayout({ children }: AdminLayoutProps) {
  // TODO: Add proper authentication check
  const isAuthenticated = true; // This should be replaced with actual auth check

  if (!isAuthenticated) {
    redirect("/login");
  }

  return <AdminClientLayout>{children}</AdminClientLayout>;
} 