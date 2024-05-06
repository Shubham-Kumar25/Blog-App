import React from "react";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="py-6 bg-gray-200 border-t border-gray-300">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <div className="flex items-center">
          <Logo width="100px" />
          <p className="ml-3 text-sm text-gray-600">
            &copy; 2024 Your Blog Name. All rights reserved.
          </p>
        </div>
        <div className="text-sm text-gray-600">
          <p>Contact: example@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
