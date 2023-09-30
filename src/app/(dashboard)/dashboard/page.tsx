import { getCurrentUser } from "@/lib/session";
import React from "react";

type Props = {};

export default async function DashboardPage({}: Props) {
  const user = await getCurrentUser();
  console.log("USER", user);
  return <div>DashboardPage</div>;
}
