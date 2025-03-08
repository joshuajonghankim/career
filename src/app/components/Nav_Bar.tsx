import Link from "next/link";

export default function Nav_Bar() {
  return (
    <header className="absolute top-0 left-0 right-0 flex justify-center p-4 bg-white dark:bg-black z-10">
      <nav className="flex gap-8 text-sm font-semibold">
        <Link href="/" className="hover:underline">Joshua Jonghan Kim</Link>
        <Link href="/portfolio" className="hover:underline">Portfolio</Link>
        {/* print button */}
        <button
          onClick={() => window.print()}
          className="hover:underline"
        >
          Print
        </button>
      </nav>


    </header>
  );
}
