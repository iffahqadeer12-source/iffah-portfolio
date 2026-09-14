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
          MERN Stack & Full-Stack Developer
        </h2>

        <p className="hero-description">
          Computer Engineering student passionate about building modern,
          responsive and full-stack web applications using React, Node.js,
          Express and MongoDB.
        </p>

        <div className="hero-buttons">

  <a href="#projects" className="primary-btn">
    View My Work
  </a>

  <a href="#contact" className="secondary-btn">
    Let's Connect
  </a>

  <a
    href="/Iffah-Qadeer-Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="secondary-btn"
  >
    Download Resume
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
