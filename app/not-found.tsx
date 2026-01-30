import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-6xl font-bold mb-4 text-gray-800">404</h1>
      <h2 className="text-3xl font-semibold mb-4 text-gray-700">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

