import React from "react";

import { SiTailwindcss } from "react-icons/si";
import { GiAnt } from "react-icons/gi";

import {
  LuArrowRight,
  LuDatabase,
  LuExternalLink,
  LuFileCode2,
  LuGithub,
  LuGlobe,
  LuMail,
  LuPhone,
  LuServer,
  LuTerminal,
} from "react-icons/lu";

import { IconType } from "react-icons";

import { SiGithub } from "react-icons/si";

import Image from "next/image";

type Skills = {
  name: string;
  icon: IconType;
};

export default function Portfolio() {
  const skills: Skills[] = [
    {
      name: "Next.js",
      icon: LuGlobe,
    },
    {
      name: "React",
      icon: LuFileCode2,
    },
    {
      name: "TailwindCSS",
      icon: SiTailwindcss,
    },
    {
      name: "Antd",
      icon: GiAnt,
    },
    {
      name: "NestJs",
      icon: LuServer,
    },
    {
      name: "Node.Js",
      icon: LuTerminal,
    },
    {
      name: "TypeScript/Javascript",
      icon: LuFileCode2,
    },
    {
      name: "PostgreSQL",
      icon: LuDatabase,
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#171717]">
      <nav className="fixed top-0 w-full z-50 bg-[#FAFAFA]/90 backdrop-blur-2xl border-b border-gray-200">
        <div className="max-w-5xl flex justify-between items-center px-6 py-4 mx-auto">
          <span className="font-bold text-lg tracking-tight text-[#171717]">
            SUPAKORN
          </span>

          <div className="hidden md:flex gap-8 text-sm text-gray-500 font-medium">
            <a href="#about" className="hover:text-black">
              About
            </a>
            <a href="#projects" className="hover:text-black">
              Projects
            </a>
            <a href="#experience" className="hover:text-black">
              Experience
            </a>
            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </div>
        </div>
      </nav>
      <section id="about" className="pt-40 pb-20 max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 bg-white">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available for work
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
            Full Stack <br /> <span className="text-gray-400">Developer</span>
          </h1>

          <div className="pl-0 md:pl-2 border-l-0 md:border-l-2 border-black/10">
            <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed md:ml-6">
              Developer with hands-on experience in building web applications. I
              thrive on challenges and am eager to adopt modern technologies to
              create impactful solutions. Ready to contribute and grow within a
              dynamic team.
            </p>
          </div>

          <div className="flex gap-4 mt-10">
            <a
              href="#projects"
              className="px-6 py-3 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800 flex items-center gap-2 group"
            >
              View Projects{" "}
              <LuArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="https://github.com/supakorn542"
              target="_blank"
              className="px-6 py-3 bg-white text-black border border-gray-200 rounded-md  text-sm font-medium hover:border-black flex items-center gap-2"
            >
              Github <SiGithub size={18} />
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold">Projects</h2>
          <div className="h-px bg-black/10 grow"></div>
        </div>

        <div className="space-y-16">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 relative rounded-xl bg-white border border-gray-200 aspect-video shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                <Image src="/taskcraft.png" alt="Taskcraft" fill />
              </div>
            </div>
            <div className="md:col-span-5 md:-ml-12 z-10">
              <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-2xl">
                <p className="text-sm font-mono mb-2 text-blue-600 font-semibold">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold mb-4">TaskCraft</h3>

                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  A full-stack task management web application developed using
                  Next.js for the frontend and NestJS for the backend.
                  Containerized via Docker and deployed on AWS with GitHub
                  Actions CI/CD pipelines. Features include user authentication,
                  an interactive dashboard, task management, and API
                  documentation with Swagger.
                </p>

                <div className="mb-6 p-4 bg-gray-50 border border-gray-100 rounded-lg text-sm">
                  <p className="font-semibold text-gray-800 mb-1">
                    Test Demo Account:
                  </p>
                  <div className="flex gap-4 text-gray-600 font-mono text-xs">
                    <p>
                      Email:{" "}
                      <span className="bg-white px-2 py-0.5 rounded border border-gray-200 user-select-all">
                        demo@taskcraft.com
                      </span>
                    </p>
                    <p>
                      Pass:{" "}
                      <span className="bg-white px-2 py-0.5 rounded border border-gray-200 user-select-all">
                        demo1234
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-mono mb-6">
                  <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded">
                    Next.js
                  </span>
                  <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded">
                    NestJS
                  </span>
                  <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded">
                    Prisma
                  </span>
                  <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded">
                    Docker
                  </span>
                  <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded">
                    AWS EC2
                  </span>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/supakorn542"
                    target="_blank"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <LuGithub size={22} />
                  </a>
                  <a
                    href="https://taskcraft.supakorndev.com/"
                    target="_blank"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <LuExternalLink size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 relative rounded-xl bg-white border border-gray-200 aspect-video shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                <Image src="/forest_tales.png" alt="Forest Tales" fill />
              </div>
            </div>
            <div className="md:col-span-5 md:-ml-12 z-10">
              <div className="p-6 rounded-xl bg-white border border-gray-200 shadow-2xl">
                <p className="text-sm font-mono mb-2 text-blue-600 font-semibold">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold mb-4">Forest Tales</h3>

                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  A web application developed as a group project to manage cafe
                  operations. It includes online ordering and product management
                  for customers and admins, using Next.js and Firebase
                  (Firestore & Authentication).
                </p>

                <div className="flex flex-wrap gap-2 text-xs font-mono mb-6">
                  <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded">
                    Next.js
                  </span>
                  <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded">
                    firebase
                  </span>
                </div>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/supakorn542"
                    target="_blank"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <LuGithub size={22} />
                  </a>
                  <a
                    href="https://project-cafe-one.vercel.app/"
                    target="_blank"
                    className="hover:text-blue-600 transition-colors"
                  >
                    <LuExternalLink size={22} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-bold text-[#171717]">Experience</h2>
          <div className="h-px bg-black/10 grow"></div>
        </div>
        <div className="pl-8">
          <h3 className="text-xl font-bold text-[#171717]">
            Software Developer Intern
          </h3>
          <p className="text-sm mb-2 font-mono text-gray-500">
            Codemonday - 4 months
          </p>
          <ul className="list-disc ml-5 space-y-2 text-gray-600">
            <li>
              Collaborated with the development team to build and maintain web
              applications.
            </li>
            <li>
              Assisted in implementing frontend features using React and backend
              APIs.
            </li>
            <li>
              Participated in code reviews and agile development processes.
            </li>
          </ul>
        </div>
      </section>

      <section id="skills" className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 bg-white border border-gray-300 p-4 rounded-lg hover:border-black"
            >
              <skill.icon size={18} className="text-gray-400" />
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
      <footer
        id="contact"
        className="max-w-3xl mx-auto py-8 text-center text-gray-600 text-sm border-t border-black/10 mt-24"
      >
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/supakorn542" target="_blank">
            <LuGithub size={24} />
          </a>
          <a
            href="mailto:supakorn.drch@gmail.com"
            className="flex items-center gap-2 hover:text-black transition-colors"
          >
            <LuMail size={20} />
            <span>supakorn.drcg@gmail.com</span>
          </a>
          <a
            className="flex items-center gap-2 hover:text-black transition-colors"
          >
            <LuPhone size={20} />
            <span>08-3759-5256</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
