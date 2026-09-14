import wanderlyImage from "../assets/wanderly-preview.png";
import wolfImage from "../assets/wolfvanguard-preview.png";
import auraImage from "../assets/aurasalon-preview.png";
import aiRagImage from "../assets/airag-preview.png";
import portfolioImage from "../assets/portfolio-preview.png";
import { useEffect, useState } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/projects"
        );

        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="projects-section">
        <div className="section-container">
          <p>Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-heading">
          
          <h2>Featured Projects</h2>
<p>
  A selection of full-stack, AI, and web projects I've built.
</p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-card" key={project._id}>
              <div className="project-image">
                {project.image && (
                  <img
  src={
    project.image === "wanderly"
      ? wanderlyImage
      : project.image === "wolfvanguard"
      ? wolfImage
      : project.image === "aura"
      ? auraImage
      : project.image === "ai-rag"
      ? aiRagImage
      : portfolioImage
  }
  alt={project.title}
/>
                )}
              </div>

              <div className="project-content">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies}
                </div>

                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
