// To run, npm run dev

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 items-center justify-between p-10 md:p-20">
      {/* photo  */}
      <div className="border border-gray-400">
        <Image
          className="relative"
          src="https://raw.githubusercontent.com/joshuajonghankim/Resume/main/public/selfie.jpg"
          alt="selfie"
          width={180}
          height={37}
          priority
        />
      </div>

      {/* name and introduction */}
      <div className=" flex flex-col gap-2">
        <div className="text-4xl">
          Joshua Jonghan Kim
        </div>
        <div className="text-center text-1xl">
          Junior Developer
        </div>
      </div>

      {/* body */}
      <div className=" w-full flex flex-col gap-2">
        <div className="border border-gray-400">
          <h1 className="font-bold">
            Contact
          </h1>
          <p className="text-sm text-wrap">
            <br />
            347-909-0683
            <br />
            joshuajonghankim@gmail.com
            <br />
            (prefer to text or email)
          </p>
        </div>

        <div className="border border-gray-400">
          <h1 className="font-bold">
            Education
          </h1>
          <p className="text-sm">
            <br />
            2015 - 2017 :<br />
            Kyungpook National University in South Korea<br />
            Energy Engineering (transferred to CS major)<br />
            <br />
            2019 - 2024 :<br />
            City University of New York, Queens College<br />
            Computer Science, BA
          </p>
        </div>

        <div className="border border-gray-400">
          <h1 className="font-bold">
            Experiences
          </h1>
          <p className="text-sm">
            <br />
            2017 - 2019 :<br />
            F-15K Assistant Mechanic in the South Korean Air Force
          </p>
        </div>

        <div className="border border-gray-400">
          <h1 className="font-bold">
            Skills
          </h1>
          <p className="text-sm">
            <br />
            JAVA<br />
            C++<br />
            Python<br />
          </p>
        </div>

        <div className="border border-gray-400">
          <h1 className="font-bold">
            Languages
          </h1>
          <p className="text-sm">
            <br />
            English<br />
            Korean<br />
            Japanese - intermediate<br />
          </p>
        </div>
      </div>

      <footer className="">
      </footer>
    </main>
  );
}
