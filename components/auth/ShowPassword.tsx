import { Eye } from "lucide-react";
import React from "react";

const ShowPassword = () => {
  return (
    <button className="absolute right-3 top-10">
      <Eye className="text-gray-600" size={19} />
    </button>
  );
};

export default ShowPassword;
