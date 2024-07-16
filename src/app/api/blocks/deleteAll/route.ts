import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Block from "@/models/Block";

export async function DELETE() {
  try {
    await dbConnect();
    await Block.deleteMany({});
    return NextResponse.json({ message: "All blocks deleted" });
  } catch (error) {
    console.error("Error deleting blocks:", error);
    return NextResponse.json(
      { message: "Failed to delete all blocks" },
      { status: 500 }
    );
  }
}
