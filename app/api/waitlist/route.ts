import { addDataToNotion } from "@/lib/notion";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const requestBody = (await req.json()) as {
      name: string;
      email: string;
    };

    addDataToNotion(requestBody);
    return new Response(JSON.stringify({ message: "Success" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    return Response.json(e, { status: 500 });
  }
}
