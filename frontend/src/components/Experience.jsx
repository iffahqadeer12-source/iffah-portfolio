function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section-label">EXPERIENCE</p>

      <h2>Practical experience through real projects and internships.</h2>

      <div className="experience-container">

        {/* Codiora */}

        <div className="experience-card">
          <p className="experience-date">
            July 2026 – September 2026
          </p>

          <h3>MERN Stack Developer Intern</h3>

          <p className="experience-company">
            Codiora
          </p>

          <p className="experience-description">
            Worked on full-stack web development using the MERN stack.
            Developed Wanderly, a travel destination platform, and
            implemented features including user reviews and ratings,
            destination and service feedback, and personalized travel
            recommendations.
          </p>

          <ul className="experience-points">
            <li>
              Built and integrated REST APIs using Node.js and Express.js.
            </li>

            <li>
              Worked with MongoDB and Mongoose for application data.
            </li>

            <li>
              Developed responsive React interfaces and integrated frontend
              functionality with backend APIs.
            </li>

            <li>
              Implemented review, rating, feedback, and personalized
              recommendation functionality for Wanderly.
            </li>
          </ul>

          <div className="experience-tech">
            React • Node.js • Express.js • MongoDB • JavaScript • REST APIs
          </div>
        </div>


        {/* Coding Atom */}

        <div className="experience-card">
          <p className="experience-date">
            August 2026
          </p>

          <h3>AI / Python Developer Intern</h3>

          <p className="experience-company">
            Coding Atom
          </p>

          <p className="experience-description">
            Worked on an AI-powered RAG Assistant project using Python,
            gaining practical experience in Retrieval-Augmented Generation
            and AI application development.
          </p>

          <ul className="experience-points">
            <li>
              Worked with Python for AI application development.
            </li>

            <li>
              Developed an AI-powered RAG Assistant project.
            </li>

            <li>
              Gained practical experience with Retrieval-Augmented
              Generation concepts.
            </li>
          </ul>

          <div className="experience-tech">
            Python • AI • RAG
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
