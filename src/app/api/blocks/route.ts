import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Block from "@/models/Block";

export async function GET() {
  try {
    await dbConnect();
    const blocks = await Block.find({}).sort({ number: -1 }).exec();
    return NextResponse.json(blocks);
  } catch (error) {
    console.error("Error fetching blocks:", error);
    return NextResponse.json(
      { message: "Failed to fetch blocks" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const newBlock = await req.json();
    const block = await Block.create(newBlock);
    return NextResponse.json(block, { status: 201 });
  } catch (error) {
    console.error("Error creating block:", error);
    return NextResponse.json(
      { message: "Failed to create block" },
      { status: 500 }
    );
  }
}
