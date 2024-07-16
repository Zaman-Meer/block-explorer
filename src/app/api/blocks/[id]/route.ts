import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Block from "@/models/Block";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const block = await Block.findById(params.id);
    if (!block)
      return NextResponse.json({ message: "Block not found" }, { status: 404 });
    return NextResponse.json(block);
  } catch (error) {
    console.error("Error fetching block:", error);
    return NextResponse.json(
      { message: "Failed to fetch block" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    await Block.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Block deleted" });
  } catch (error) {
    console.error("Error deleting block:", error);
    return NextResponse.json(
      { message: "Failed to delete block" },
      { status: 500 }
    );
  }
}
