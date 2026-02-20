"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const workData = [
  {
    id: 1,
    date: "2023 - Present",
    title: "Senior Frontend Developer",
    subtitle: "TechCorp Solutions",
    description: "Leading the frontend team in building scalable web applications using React and Next.js. improved performance by 40%.",
  },
  {
    id: 2,
    date: "2021 - 2023",
    title: "UI/UX Designer & Developer",
    subtitle: "Creative Studio",
    description: "Designed and developed award-winning websites for international clients. Focused on interaction design and accessibility.",
  },
  {
    id: 3,
    date: "2020 - 2021",
    title: "Junior Web Developer",
    subtitle: "StartUp Inc",
    description: "Collaborated with cross-functional teams to deliver high-quality code. Mastered modern JavaScript frameworks.",
  },
];

const educationData = [
  {
    id: 1,
    date: "2016 - 2020",
    title: "Bachelor of Technology in Computer Science",
    subtitle: "University of Technology",
    description: "Graduated with Honors. Specialized in Human-Computer Interaction and Web Technologies.",
  },
  {
    id: 2,
    date: "2018",
    title: "Full Stack Web Development Bootcamp",
    subtitle: "Code Academy",
    description: "Intensive 6-month program covering MERN stack and cloud deployment.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#020b26] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Timeline id="work" title="Work Experience" items={workData} />
      <Timeline id="education" title="Education" items={educationData} />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
