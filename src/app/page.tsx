//npm run dev
//border border-slate-950 

"use client";

import Image from "next/image";
import Nav_Bar from "./components/Nav_Bar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <Nav_Bar />

      <main className="self-start flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <img
          className="mx-auto dark:invert"
          src="/face.jpg"
          alt="Joshua Jonghan Kim"
          width={250}
          height={30}
        />

        <ol className="list-inside text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 font-bold text-lg">Joshua Jonghan Kim</li>
          <li className="text-gray-700">Software Engineer | Web Developer</li>
        </ol>

        <p className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] text-gray-800">
          I am a software engineer with a passion for building innovative and impactful solutions.
          With experience in full-stack web development, data analysis, and machine learning,
          I have contributed to various projects ranging from scalable web applications to AI-driven insights.
          My expertise includes JavaScript (React, Node.js), Python (Django, Flask, Pandas), and cloud technologies (AWS, Firebase).
          I am always eager to learn new skills and technologies, striving to bridge the gap between technology and real-world applications.
        </p>

        <section className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] text-gray-800">
          <h2 className="text-lg font-semibold">Skills & Technologies</h2>
          <ul className="list-disc list-inside">
            <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
            <li>Backend: Node.js, Express, Django, Flask</li>
            <li>Database: PostgreSQL, MongoDB, Firebase</li>
            <li>Cloud & DevOps: AWS (Lambda, S3), Docker, CI/CD</li>
            <li>Data Science: Pandas, NumPy, Scikit-learn, TensorFlow</li>
          </ul>
        </section>

        <section className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] text-gray-800">
          <h2 className="text-lg font-semibold">Experience</h2>
          <p><strong>Software Engineer</strong> - XYZ Tech (2022 - Present)</p>
          <ul className="list-disc list-inside">
            <li>Developed and maintained scalable web applications using React and Node.js.</li>
            <li>Integrated AI-driven analytics to enhance user experience and decision-making.</li>
            <li>Led a team of developers to implement a CI/CD pipeline, improving deployment efficiency.</li>
          </ul>
        </section>
      </main>


      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:joshuajonghankim@gmail.com"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="Email icon"
            width={16}
            height={16}
          />
          joshuajonghankim@gmail.com
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="sms:+13479090683"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Phone icon"
            width={16}
            height={16}
          />
          +1 347-909-0683
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/joshuajonghankim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Github icon"
            width={16}
            height={16}
          />
          Github Page
        </a>
      </footer>
    </div>
  );
}
