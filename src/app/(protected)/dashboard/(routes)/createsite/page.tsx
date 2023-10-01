import React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CreateSiteForm from "./components/create-site-form";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/utils/icons";
import Link from "next/link";

export default function CreateSitePage() {
  return (
    <Card className="max-w-md m-auto flex-1 mt-20">
      <Link
        href="/dashboard"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <CardHeader>
        <CardTitle className="text-xl">Add Site</CardTitle>
        {/* <CardDescription>Add you.</CardDescription> */}
      </CardHeader>
      <CardContent>
        <CreateSiteForm />
      </CardContent>
    </Card>
  );
}
