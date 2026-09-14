const skills = [
  {
    title: "Frontend",
    skills: "HTML5 • CSS3 • JavaScript • React • Tailwind CSS",
  },
  {
    title: "Backend",
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
    title: "Tools",
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
        Technologies I work with.
      </h2>

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
