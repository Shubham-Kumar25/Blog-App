import React from "react";

function Container({ children }) {
  return (
    <div className="container px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      {children}
    </div>
  );
}

export default Container;
