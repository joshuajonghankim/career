import Link from "next/link";
import Nav_Bar from "../components/Nav_Bar";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 font-[family-name:var(--font-geist-sans)]">

      <Nav_Bar />

      <h1 className="text-3xl font-bold">Portfolio Page</h1>
      <p className="text-lg text-gray-600">Welcome to my portfolio.</p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Go Back to About
      </Link>
    </div>
  );
}
