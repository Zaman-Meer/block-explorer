import { Block } from "@/types";
import { useState, useEffect } from "react";

interface BlockItemProps {
  block: Block;
  onDelete: (id: string) => void;
  displayMode: "decimal" | "hex";
}

const BlockItem: React.FC<BlockItemProps> = ({
  block,
  onDelete,
  displayMode,
}) => {
  const [isDecimal, setIsDecimal] = useState({
    number: true,
    size: true,
    gasLimit: true,
  });
  const [isTimestampHumanReadable, setIsTimestampHumanReadable] =
    useState(false);

  useEffect(() => {
    if (displayMode !== "hex") {
      setIsDecimal({
        number: true,
        size: true,
        gasLimit: true,
      });
    } else {
      setIsDecimal({
        number: false,
        size: false,
        gasLimit: false,
      });
    }
  }, [displayMode]);

  const toggleHex = (value: string, isDecimal: boolean) =>
    isDecimal ? parseInt(value, 16) : value;

  return (
    <div className="w-full max-w-[800px] bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-300 relative">
      {/* Delete Icon */}
      <button
        onClick={() => onDelete(block._id)}
        className="absolute top-2 right-2 p-1 text-red-600 hover:text-red-800"
        aria-label="Delete block"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="flex flex-col">
        <p
          className="text-lg font-semibold cursor-pointer text-wrap hover:text-blue-500"
          onClick={() =>
            setIsDecimal((prev) => ({ ...prev, number: !prev.number }))
          }
        >
          Block Number:{" "}
          <span className="font-normal">
            {displayMode === "hex" || isDecimal.number
              ? toggleHex(block.number.toString(), isDecimal.number)
              : block.number}
          </span>
        </p>
        <p
          className="text-lg font-semibold cursor-pointer text-wrap hover:text-blue-500"
          onClick={() =>
            setIsDecimal((prev) => ({ ...prev, size: !prev.size }))
          }
        >
          Size:{" "}
          <span className="font-normal">
            {isDecimal.size
              ? toggleHex(block.size.toString(), isDecimal.size)
              : block.size}
          </span>
        </p>
        <p
          className="text-lg font-semibold cursor-pointer text-wrap hover:text-blue-500"
          onClick={() => setIsTimestampHumanReadable(!isTimestampHumanReadable)}
        >
          Timestamp:{" "}
          <span className="font-normal">
            {isTimestampHumanReadable
              ? new Date(block.timestamp * 1000).toLocaleString()
              : block.timestamp}
          </span>
        </p>
        <p className="text-lg font-semibold text-wrap">
          Nonce: <span className="font-normal">{block.nonce}</span>
        </p>
        <p
          className="text-lg font-semibold  text-wrap cursor-pointer hover:text-blue-500"
          onClick={() =>
            setIsDecimal((prev) => ({ ...prev, gasLimit: !prev.gasLimit }))
          }
        >
          Gas Limit:{" "}
          <span className="font-normal">
            {isDecimal.gasLimit
              ? toggleHex(block.gasLimit.toString(), isDecimal.gasLimit)
              : block.gasLimit}
          </span>
        </p>
        <p className="text-lg font-semibold text-wrap break-words">
          Hash: <span className="font-normal">{block.hash}</span>
        </p>
      </div>
    </div>
  );
};

export default BlockItem;
