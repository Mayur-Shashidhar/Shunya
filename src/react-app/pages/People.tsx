import PageLayout from "../components/PageLayout";
import ReflectiveCard from "../components/ReflectiveCard";
import { motion } from "motion/react";
import { usePageMeta } from "../hooks/usePageMeta";

export default function People() {
  usePageMeta({
    title: "Team — SHUNYA | PES University Mathematics Club",
    description: "Meet the core team behind SHUNYA, the official mathematics club of PES University RR Campus, Bengaluru.",
    path: "/people"
  });

  const coreTeam = [
    {
      name: "Madhu S",
      role: "Club Head",
      image: "/team_pics/Madhu.jpg",
      id: "SH-2026-001"
    },
    {
      name: "Janhavi Rajpurohit",
      role: "Deputy Club Head",
      image: "/team_pics/janhaviR.jpg",
      id: "SH-2026-002"
    },
    {
      name: "S Mayur",
      role: "Technical Head",
      image: "/team_pics/S%20Mayur.jpg",
      id: "SH-2026-003"
    },
    {
      name: "Aryan Ravenkar",
      role: "Math Head",
      image: "/team_pics/AryanRevankar.jpg",
      id: "SH-2026-004"
    },
    {
      name: "Saiesh Shankar",
      role: "Math Head",
      image: "/team_pics/Saiesh.jpg",
      id: "SH-2026-005"
    },
    {
      name: "Pavitra",
      role: "Logistics Head",
      image: "/team_pics/Pavitra.jpg",
      id: "SH-2026-006"
    },
    {
      name: "Bhavya",
      role: "Logistics Head",
      image: "/team_pics/bhavya.png",
      id: "SH-2026-007"
    },
    {
      name: "Nikita Mankani",
      role: "OPERATIONS Head",
      image: "/team_pics/Nikita.png",
      id: "SH-2026-008"
    },
    {
      name: "Sushveen",
      role: "PR & Campaigning Head",
      image: "/team_pics/Sushveen.jpeg",
      id: "SH-2026-009"
    },
    {
      name: "Atishay",
      role: "Event Management Head",
      image: "/team_pics/Atishay.webp",
      id: "SH-2026-010"
    },
    {
      name: "Spoorthi Poonachandra",
      role: "Event Management Head",
      image: "/team_pics/Spoorthi.jpeg",
      id: "SH-2026-011"
    },
    {
      name: "Aditi Hubli",
      role: "Design Head",
      image: "/team_pics/AditiMHubli.jpg",
      id: "SH-2026-012"
    },
    {
      name: "Keerthi Shivakumar",
      role: "Hospitality Head",
      image: "/team_pics/Keerthi.jpeg",
      id: "SH-2026-013"
    }
  ];

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6"><span className="text-gradient">The Team</span></h1>
          <p className="text-xl text-muted max-w-2xl">
            The minds behind Shunya. We are a collective of passionate students driving mathematical exploration on campus.
          </p>
        </motion.div>

        {/* Core Committee */}
        <section>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-muted">Core Team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ReflectiveCard
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  id={member.id}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
}