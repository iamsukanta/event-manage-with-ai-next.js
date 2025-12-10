import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800/50 py-8 px-6 max-w-7xl mx-auto item-center flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-6 text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Spott.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
