function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">

        <p className="intro">
          Hello, I'm
        </p>

        <h1>
          Iffah Qadeer
        </h1>

        <h2>
          Full-Stack Developer | React • Node.js • MongoDB
        </h2>

        <p className="hero-description">
          Computer Engineering student and Full-Stack Developer building
          responsive, scalable web applications with React, Node.js,
          Express.js, and MongoDB.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            View My Projects
          </a>

          <a
            href="/Iffah-Qadeer-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            Download Resume
          </a>

          <a href="#contact" className="secondary-btn">
            Get in Touch
          </a>

        </div>

        <div className="social-links">

          <a
            href="https://github.com/iffahqadeer12-source"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/in/iffah-qadeer-79857a411/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;