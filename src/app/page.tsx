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
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        <Image
          className="mx-auto rounded-full shadow-lg"
          src="https://raw.githubusercontent.com/joshuajonghankim/career/refs/heads/main/public/face.jpg"
          alt="Portrait of Joshua Jonghan Kim"
          width={300}
          height={300}
        />

        <ol className="text-center md:text-left text-gray-900">
          <li className="mb-2 font-bold text-xl">Joshua Jonghan Kim</li>
          <li className="text-gray-700">Software Engineer | Web Developer</li>
        </ol>

        <p className="text-sm text-center md:text-left text-slate-800 leading-relaxed">
          I am a software engineer with a passion for building innovative and impactful solutions.
          With experience in full-stack web development, data analysis, and machine learning,
          I have contributed to various projects ranging from scalable web applications to AI-driven insights.
          My expertise includes JavaScript (React, Node.js), Python (Django, Flask, Pandas), and cloud technologies (AWS, Firebase).
          I am always eager to learn new skills and technologies, striving to bridge the gap between technology and real-world applications.
        </p>

        <section className="text-sm text-center md:text-left text-slate-800">
          <h2 className="text-lg font-semibold mb-2">Skills & Technologies</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Frontend: React, Next.js, TypeScript, Tailwind CSS</li>
            <li>Backend: Node.js, Express, Django, Flask</li>
            <li>Database: PostgreSQL, MongoDB, Firebase</li>
            <li>Cloud & DevOps: AWS (Lambda, S3), Docker, CI/CD</li>
            <li>Data Science: Pandas, NumPy, Scikit-learn, TensorFlow</li>
          </ul>
        </section>

        <section className="text-sm text-center md:text-left text-slate-800">
          <h2 className="text-lg font-semibold mb-2">Experience</h2>
          <p><strong>Software Engineer</strong> - XYZ Tech (2022 - Present)</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Developed and maintained scalable web applications using React and Node.js.</li>
            <li>Integrated AI-driven analytics to enhance user experience and decision-making.</li>
            <li>Led a team of developers to implement a CI/CD pipeline, improving deployment efficiency.</li>
          </ul>
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap mt-auto items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:joshuajonghankim@gmail.com"
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            mail
          </span>

          joshuajonghankim@gmail.com
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="sms:+13479090683"
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            phone
          </span>
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
            src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            alt="Github icon"
            width={30}
            height={30}
          />
          Github Page
        </a>
      </footer>
    </div>
  );
}
