// import { ExampleService } from "@/lib/services/example.service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, joinAs } = await req.json();

    if (!email || !joinAs) {
      return NextResponse.json(
        { success: false, message: "Missing email or join as type" },
        { status: 400 },
      );
    }

    // const exampleService = ExampleService.Instance();

    // const result = await exampleService.publicMethod();

    // if (result)
    //   return NextResponse.json(
    //     { success: true, message: "Added new row successfully" },
    //     { status: 200 },
    //   );

    return NextResponse.json(
      { success: false, message: "Added new row failed" },
      { status: 400 },
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message || "Sorry, something went wrong" },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { data: "Hello!", success: true, message: "Success" },
    { status: 200 },
  );
}
