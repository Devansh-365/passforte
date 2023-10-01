import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Site } from "@prisma/client";

export default function SiteCard({ site }: { site: Site }) {
  return (
    <Card className="h-32 max-w-xl">
      <CardHeader className="grid auto-cols-max grid-flow-col gap-x-4">
        <Link href={`/dashboard/site/${site.id}`} className="w-40">
          <CardTitle className="max-w-lg pt-2 underline underline-offset-4 hover:text-emerald-300">
            {site.name.length > 17 ? `${site.name.slice(0, 17)}...` : site.name}
          </CardTitle>
        </Link>
      </CardHeader>
    </Card>
  );
}
