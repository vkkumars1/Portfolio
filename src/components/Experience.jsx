import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const timelineItems = [
  {
    type: "experience",
    title: "Full Stack Developer - Intern",
    organization: "Brane Enterprises Pvt Ltd",
    location: "Bangalore, India",
    period: "September 2023 - August 2024",
    description: "",
    details: [
      "Developed a Node.js and MongoDB system to store and analyze over 100K daily UI/API test cases, leading to a 40-50% reduction in QA team triage time.",
      "Implemented Redis caching, improving API response times to below 10 milliseconds during peak loads.",
      "Strengthened core backend infrastructure by creating and maintaining RESTful APIs using Node.js and Express.js.",
      "Developed and deployed web applications using ReactJS and Material UI.",
      "Ensured functionality and reliability by performing sanity tests and using Postman for API testing.",
      "Leveraged AWS services for scalable deployment and infrastructure management.",
      "Utilized Java to write efficient automation scripts, enhancing testing coverage and reliability.",
      "Conducted end-to-end mobile app testing using Appium.",
    ],
    skills: ["Node.js", "MongoDB", "React.js", "Express.js", "Redis", "AWS", "Java", "Appium"],
  },
  {
    type: "education",
    title: "BTech Computer Science Engineering",
    organization: "Chitkara University",
    period: "Aug 2020 - Aug 2024",
    description: "CGPA: 9.52",
    details: [],
    skills: [],
  },
  {
    type: "education",
    title: "Higher Secondary Education",
    organization: "Swami Vivekanand Public School, Sector-17, HUDA, Jagadhri",
    period: "Mar 2018 - Mar 2020",
    description: "",
    details: [],
    skills: [],
  },
];

export function Experience() {
  return (
    <section id="experience" className="container py-24 sm:py-32">
      <h2 className="mb-12 text-center text-3xl font-bold leading-tight tracking-tighter sm:text-4xl md:text-5xl">
        Experience & Education
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border" />
        <div className="space-y-12">
          {timelineItems.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative ${
        index % 2 === 0 ? "mr-auto pr-8 lg:ml-0 lg:mr-auto lg:pr-8 lg:pl-0" : "ml-auto pl-8 lg:ml-auto lg:mr-0 lg:pl-8 lg:pr-0"
      } lg:w-1/2`}
    >
      <div
        className={`absolute top-0 flex h-8 w-8 items-center justify-center rounded-full border-4 border-yellow-500 bg-background ${
          index % 2 === 0
            ? "-right-4 lg:-right-4"
            : "-left-4 lg:-left-4"
        }`}
      >
        {item.type === "education" ? (
          <GraduationCap className="h-4 w-4 text-yellow-500" />
        ) : (
          <Briefcase className="h-4 w-4 text-yellow-500" />
        )}
      </div>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">{item.title}</h3>
          <p className="text-sm text-muted-foreground">
            {item.organization} • {item.period}
            {item.location && ` • ${item.location}`}
          </p>
        </div>
        <div className="p-6 pt-0">
          {item.description && (
            <p className="mb-2 text-muted-foreground">{item.description}</p>
          )}
          {item.details.length > 0 && (
            <ul className="ml-6 list-disc space-y-2">
              {item.details.map((detail, idx) => (
                <li key={idx} className="text-muted-foreground">
                  {detail}
                </li>
              ))}
            </ul>
          )}
          {item.skills.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span key={skill} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

