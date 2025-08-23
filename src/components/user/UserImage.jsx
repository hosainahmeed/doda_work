import React from "react";
import cn from "../../lib/cn";

function UserImage({ user, className }) {
  return (
    <div className="flex items-center">
      <img
        src={user?.avatar}
        alt={user?.name}
        className={cn("w-10 h-10 rounded-full", className)}
      />
      <h1>{user?.name}</h1>
    </div>
  );
}

export default UserImage;
