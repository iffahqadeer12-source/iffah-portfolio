function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-label">EXPERIENCE</p>

      <h2>Where I've gained practical experience.</h2>

      <div className="experience-container">

        <div className="experience-card">
          <p className="experience-date">
            July 2026 – September 2026
          </p>

          <h3>MERN Stack Developer Intern</h3>

          <p className="experience-company">Codiora</p>

          <p>
            Gained hands-on experience in full-stack web development using
            the MERN stack. Built responsive web applications, worked with
            REST APIs, and managed application data using MongoDB.
            Developed Wanderly, a full-stack travel destination platform.
          </p>

          <div className="experience-tech">
            React • Node.js • Express.js • MongoDB • JavaScript • REST APIs
          </div>
        </div>

        <div className="experience-card">
          <p className="experience-date">
            August 2026
          </p>

          <h3>AI / Python Developer Intern</h3>

          <p className="experience-company">Coding Atom</p>

          <p>
            Worked on an AI-powered RAG Assistant project using Python.
            Gained practical experience with retrieval-augmented generation,
            AI application development, and building an AI-based project.
          </p>

          <div className="experience-tech">
            Python • AI • RAG
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
