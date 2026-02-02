
"use client";

import React, { ReactNode } from "react";

interface DrawerProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    children: ReactNode;
}
export default function Drawer({ isOpen, setIsOpen, children }) {
    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* Drawer panel */}
            <div
                className={`bg-[#000000]fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-4">
                    <button
                        className="mb-4 p-2 bg-red-500 text-white rounded"
                        onClick={() => setIsOpen(false)}
                    >
                        Close
                    </button>
                    {children}
                </div>
            </div>
        </>
    );
}
