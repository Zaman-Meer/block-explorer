import axios from "axios";

const INFURA_URL = `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`;

export const fetchBlockByNumber = async (blockNumber: number | "latest") => {
  const response = await axios.post(INFURA_URL, {
    jsonrpc: "2.0",
    method: "eth_getBlockByNumber",
    params: [
      blockNumber === "latest" ? "latest" : `0x${blockNumber.toString(16)}`,
      true,
    ],
    id: 1,
  });

  return response.data.result;
};
