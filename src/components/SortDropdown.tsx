import React from "react";
import { Block } from "@/types";

/**
 * Defines the props for the `SortDropdown` component.
 *
 * @property {keyof Block} sortField - The current sort field.
 * @property {React.Dispatch<React.SetStateAction<keyof Block>>} setSortField - A function to update the sort field.
 * @property {"asc" | "desc"} sortOrder - The current sort order.
 * @property {React.Dispatch<React.SetStateAction<"asc" | "desc">>} setSortOrder - A function to update the sort order.
 */

interface SortDropdownProps {
  sortField: keyof Block;
  setSortField: React.Dispatch<React.SetStateAction<keyof Block>>;
  sortOrder: "asc" | "desc";
  setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
}

const SortDropdown: React.FC<SortDropdownProps> = ({
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <div className="flex">
      <label htmlFor="sortField" className="mr-2">
        Sort by:
      </label>
      <select
        id="sortField"
        value={sortField}
        onChange={(e) => setSortField(e.target.value as keyof Block)}
        className="mr-4 p-2 border"
      >
        <option value="number">Number</option>
        <option value="size">Size</option>
        <option value="timestamp">Timestamp</option>
        <option value="nonce">Nonce</option>
        <option value="gasLimit">Gas Limit</option>
        <option value="hash">Hash</option>
      </select>

      <label htmlFor="sortOrder" className="mr-2">
        Order by:
      </label>
      <select
        id="sortOrder"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
        className="mr-4 p-2 border"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortDropdown;
