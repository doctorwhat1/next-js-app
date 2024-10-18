'use client';
import { useState } from "react";
import Image from "next/image";

const Sidebar2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Toggle Button for Mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 btn btn-square btn-ghost"
        onClick={toggleSidebar}
      >
        <Image
          src={isOpen ? "/icons/close.svg" : "/icons/menu.svg"}
          alt="Toggle Icon"
          width={24}
          height={24}
        />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-base-200 shadow-lg p-5 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:flex lg:w-64`}
      >
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">Menu</h2>
          <ul className="menu p-0">
            <li className="hover-bordered">
              <a href="#">Home</a>
            </li>
            <li className="hover-bordered">
              <a href="#">About</a>
            </li>
            <li className="hover-bordered">
              <a href="#">Services</a>
            </li>
            <li className="hover-bordered">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Sidebar2;