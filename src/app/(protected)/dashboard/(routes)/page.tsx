import { buttonVariants } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/session";
import Link from "next/link";
import React from "react";

type Props = {};

export default async function DashboardPage({}: Props) {
  const user = await getCurrentUser();
  return (
    <main className="flex-1 h-screen">
      <section className="flex h-36 items-center border-b">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">My Projects</h1>
            <Link href="/" className={buttonVariants({})}>
              Create
            </Link>
            {/* <CreateProjectButton /> */}
          </div>
        </div>
      </section>
    </main>
  );
}
