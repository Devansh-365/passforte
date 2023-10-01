import SiteCard from "@/components/site-card";
import { buttonVariants } from "@/components/ui/button";
import db from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import Link from "next/link";
import React from "react";

type Props = {};

export default async function DashboardPage({}: Props) {
  const user = await getCurrentUser();

  const sites = await db.site.findMany({});
  console.log("SITES : ", sites);
  return (
    <main className="flex-1 h-screen">
      <section className="flex h-36 items-center border-b">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">My Sites</h1>
            <Link href="/dashboard/createsite" className={buttonVariants({})}>
              Add Site
            </Link>
            {/* <CreateProjectButton /> */}
          </div>
        </div>
      </section>
      <section className="grid grid-cols-5 gap-5 pt-12 mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        {sites && sites.map((site) => <SiteCard site={site} key={site.id} />)}
      </section>
    </main>
  );
}
