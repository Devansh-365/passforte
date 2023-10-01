import db from "@/lib/db";
import { getCurrentUser } from "@/lib/session";
import { NextResponse } from "next/server";
import * as z from "zod";

const siteSchema = z.object({
  name: z.string().min(2),
  encryptionKeyHint: z.string().min(2),
});

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const json = await req.json();
    const data = siteSchema.parse(json);

    const job = await db.site.create({
      data: {
        userId: user.id,
        name: data.name,
        encryptionKeyHint: data.encryptionKeyHint,
      },
    });

    return NextResponse.json(job);
  } catch (error) {
    console.log("[SITE_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
