import useSWR from "swr";
import { Block } from "@/types";

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Network response was not ok");
  }
  return res.json();
};

const useBlocks = () => {
  const { data, error, mutate, isLoading, isValidating } = useSWR<Block[]>(
    "/api/blocks",
    fetcher,
    {
      refreshInterval: 30000, // Fetch new blocks every minute
    }
  );

  return {
    blocks: data || [],
    isLoading: isLoading || isValidating,
    isError: error,
    mutate,
  };
};

export default useBlocks;
