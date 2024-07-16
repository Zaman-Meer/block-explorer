import { NextRequest, NextResponse } from "next/server";
import { updateBlocks } from "@/utils/updateBlocks";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await updateBlocks();
    return NextResponse.json(
      { message: "Blocks updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating blocks:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
