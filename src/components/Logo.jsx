import React from "react";

function Logo({ width = "100px" }) {
  return (
    <div className="text-xl font-bold text-gray-800" style={{ width }}>
      MyLogo
    </div>
  );
}

export default Logo;
