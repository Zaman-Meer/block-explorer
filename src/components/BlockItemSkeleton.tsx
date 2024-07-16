const BlockItemSkeleton = () => {
  return (
    <div className="w-full max-w-[800px] animate-pulse bg-white shadow-md rounded-lg border border-gray-300 p-4 mb-4 space-y-4">
      <div className="h-4 bg-gray-200 rounded "></div>
      <div className="h-4 bg-gray-200 rounded "></div>
      <div className="h-4 bg-gray-200 rounded "></div>
      <div className="h-4 bg-gray-200 rounded "></div>
      <div className="h-4 bg-gray-200 rounded"></div>
    </div>
  );
};

export default BlockItemSkeleton;
