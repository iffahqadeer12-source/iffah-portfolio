const skills = [
  {
    title: "Frontend Development",
    skills: "HTML5 • CSS3 • JavaScript • React • Tailwind CSS",
  },
  {
    title: "Backend Development",
    skills: "Node.js • Express.js • REST APIs",
  },
  {
    title: "Database",
    skills: "MongoDB • Mongoose",
  },
  {
    title: "Programming",
    skills: "Python • JavaScript • C++ • OOP • DSA",
  },
  {
    title: "Development Tools",
    skills: "Git • GitHub • Postman • VS Code • Vite",
  },
  {
    title: "AI & Cybersecurity",
    skills: "RAG • AI Development • Security Fundamentals • SIEM",
  },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <p className="section-label">MY SKILLS</p>

      <h2>
        Technologies I use to build and develop.
      </h2>

      <p className="section-text skills-intro">
        A growing technical toolkit across full-stack development,
        programming, AI, and cybersecurity.
      </p>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <h3>{skill.title}</h3>

            <p>{skill.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
