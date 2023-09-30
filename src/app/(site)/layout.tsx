import React from "react";

import Navbar from "@/components/utils/navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <Navbar />
      <main className="flex-1 bg-[#161616]">{children}</main>
    </div>
  );
}
