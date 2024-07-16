import Block from "@/models/Block";
import { fetchBlockByNumber } from "@/utils/fetchBlocks";
import dbConnect from "@/utils/dbConnect";

export const updateBlocks = async (): Promise<void> => {
  await dbConnect();

  try {
    const latestBlock = await fetchBlockByNumber("latest");

    const blockData = {
      size: parseInt(latestBlock.size, 16),
      number: parseInt(latestBlock.number, 16),
      timestamp: parseInt(latestBlock.timestamp, 16),
      nonce: latestBlock.nonce,
      gasLimit: latestBlock.gasLimit,
      hash: latestBlock.hash,
    };

    await Block.updateOne(
      { hash: blockData.hash },
      { $set: blockData },
      { upsert: true }
    );

    console.log("Block updated or inserted:", blockData);
  } catch (error) {
    console.error("Error fetching or saving block:", error);
  }
};
