"use client";
import { useState } from "react";
import BlockItem from "./BlockItem";
import SortDropdown from "./SortDropdown";
import { useBlocks } from "@/hooks";
import { toast } from "react-toastify";
import { Block } from "@/types"; // Import the Block type
import BlockItemSkeleton from "./BlockItemSkeleton";

const BlocksList: React.FC = () => {
  const { blocks, isLoading, isError, mutate } = useBlocks();
  const [sortField, setSortField] = useState<keyof Block>("number");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [displayMode, setDisplayMode] = useState<"decimal" | "hex">("hex");

  const toggleDisplayMode = () => {
    setDisplayMode(displayMode === "decimal" ? "hex" : "decimal");
  };

  const deleteBlock = async (id: string) => {
    try {
      await fetch(`/api/blocks/${id}`, {
        method: "DELETE",
      });
      mutate();
      toast.success("Block deleted successfully");
    } catch (error) {
      toast.error("Failed to delete block");
    }
  };

  const deleteAllBlocks = async () => {
    try {
      await fetch("/api/blocks/deleteAll", {
        method: "DELETE",
      });
      mutate();
      toast.success("All blocks deleted successfully");
    } catch (error) {
      toast.error("Failed to delete all blocks");
    }
  };

  if (isError) {
    toast.error("Failed to load blocks");
  }

  return (
    <div className="container min-h-screen mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Block Explorer</h1>

      <div className="flex justify-between items-center gap-4 flex-wrap mb-4">
        <SortDropdown
          sortField={sortField}
          setSortField={setSortField}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
        <div className="space-x-4">
          <button
            onClick={deleteAllBlocks}
            className="ml-auto p-2 border rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            Delete All
          </button>
          <button
            onClick={toggleDisplayMode}
            className="ml-4 p-2 border rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
          >
            {`Toggle Display Mode for All (${
              displayMode === "hex" ? "Hex" : "Decimal"
            })`}
          </button>
        </div>
      </div>

      <ul>
        {isLoading && blocks?.length === 0 ? (
          Array.from({ length: 5 }).map((_, index) => (
            <BlockItemSkeleton key={index} />
          ))
        ) : isLoading ? (
          <BlockItemSkeleton />
        ) : (
          ""
        )}
        <div className="flex flex-col justify-start items-start gap-4 mt-6">
          {blocks
            .sort((a, b) => {
              const aValue = a[sortField];
              const bValue = b[sortField];

              if (sortOrder === "asc") {
                return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
              } else {
                return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
              }
            })
            .map((block) => (
              <BlockItem
                key={block.hash}
                block={block}
                displayMode={displayMode}
                onDelete={deleteBlock}
              />
            ))}
        </div>
      </ul>
    </div>
  );
};

export default BlocksList;
