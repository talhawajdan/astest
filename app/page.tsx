"use client";
import DashboardLayout from "@/layouts/dashboard-layout";
import DashboardSection from "@/sections/dashboard";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <DashboardLayout>
      <DashboardSection />
    </DashboardLayout>
  );
}
