import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">
      <header className="absolute top-0 left-0 right-0 flex justify-center p-4 bg-white dark:bg-black z-10">
        <nav className="flex gap-8 text-sm font-semibold">
          <Link href="/" className="hover:underline">About</Link>
          <Link href="/portfolio" className="hover:underline">Portfolio</Link>
        </nav>
      </header>

      <h1 className="text-3xl font-bold">Portfolio Page</h1>
      <p className="text-lg text-gray-600">Welcome to my portfolio.</p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Go Back to About
      </Link>
    </div>
  );
}
