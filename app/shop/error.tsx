"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ShopError({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-3xl font-bold mb-4 text-red-600">Something went wrong!</h1>
            <p className="text-gray-700 mb-4">{error.message}</p>
            <button
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => reset()}
            >
                    Try Again
            </button>
    </div>
    );
}
