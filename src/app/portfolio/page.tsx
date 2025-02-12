"use client";

import Link from "next/link";
import Nav_Bar from "../components/Nav_Bar";

const portfolioItems = [
  { title: "portfolio 1", link: "/portfolio/1" },
  { title: "portfolio 2", link: "/portfolio/2" },
  { title: "portfolio 3", link: "/portfolio/3" },
  { title: "portfolio 4", link: "/portfolio/4" },
  { title: "portfolio 5", link: "/portfolio/5" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
      <Nav_Bar />

      <h1 className="text-3xl font-bold mb-4">Portfolio Page</h1>
      <p className="text-lg text-gray-600 mb-6">Welcome to my portfolio.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {portfolioItems.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className="w-32 h-32 flex items-center justify-center bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              {item.title}
            </div>
          </Link>
        ))}
      </div>

      <Link href="/" className="mt-6 text-blue-500 hover:underline">
        Go Back to About
      </Link>
    </div>
  );
}
