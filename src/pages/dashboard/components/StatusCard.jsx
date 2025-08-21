import React from "react";

function StatusCard({ item }) {
  return (
    <div className="rounded-lg bg-white border border-gray-200/40 shadow-md p-6">
      <div className="flex items-center justify-center gap-2">
        {item?.icon && (
          <div className="w-20 h-20">
            <img
              src={item?.icon}
              alt={item?.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-black line-clamp-1">
            {item?.title}
          </h1>
          <h1 className="text-xl font-normal leading-0 text-black">
            {item?.number}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default StatusCard;
