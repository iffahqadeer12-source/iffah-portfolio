function Certifications() {
  return (
    <section id="certifications" className="section">
      <p className="section-label">CERTIFICATIONS</p>

      <h2>Certifications and professional learning.</h2>

      <div className="certifications-container">

        <div className="certification-card">
          <div>
            <p className="certification-date">2026</p>

            <h3>MERN Stack Development Internship</h3>

            <p className="certification-issuer">
              Codiora
            </p>

            <p className="certification-description">
              Internship experience focused on full-stack web development
              using the MERN stack, including React, Node.js, Express.js,
              MongoDB, and REST APIs.
            </p>
          </div>

          <a
            href="/codiora-certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="certification-link"
          >
            View Certificate ↗
          </a>
        </div>


        <div className="certification-card">
          <div>
            <p className="certification-date">In Progress</p>

            <h3>Google Cybersecurity Professional Certificate</h3>

            <p className="certification-issuer">
              Google • Coursera
            </p>

            <p className="certification-description">
              Developing practical knowledge in cybersecurity fundamentals,
              risk management, security tools, and SIEM through the Google
              Cybersecurity Professional Certificate program.
            </p>
          </div>

          <span className="certification-link">
            In Progress
          </span>
        </div>
<div className="certification-card">
  <div>
    <p className="certification-date">August 2026</p>

    <h3>AI / Python Developer Internship</h3>

    <p className="certification-issuer">
      Coding Atom
    </p>

    <p className="certification-description">
      Internship experience focused on Python and AI application
      development, including practical work on an AI-powered
      Retrieval-Augmented Generation (RAG) Assistant.
    </p>
  </div>

  <a
    href="/coding-atom-certificate.png"
    target="_blank"
    rel="noopener noreferrer"
    className="certification-link"
  >
    View Certificate ↗
  </a>
</div>
      </div>
    </section>
  );
}

export default Certifications;