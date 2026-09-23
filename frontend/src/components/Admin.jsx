import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [contacts, setContacts] = useState([]);
  const [projects, setProjects] = useState([]);

  const [loadingContacts, setLoadingContacts] = useState(true);
  const [loadingProjects, setLoadingProjects] = useState(true);

  const [editingProject, setEditingProject] = useState(null);
  const [savingProject, setSavingProject] = useState(false);
  const [projectStatus, setProjectStatus] = useState("");

  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/contacts"
      );

      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoadingContacts(false);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/projects"
      );

      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoadingProjects(false);
    }
  };

  useEffect(() => {
    fetchContacts();
    fetchProjects();
  }, []);

  const deleteContact = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:5001/api/contacts/${id}`
      );

      setContacts(
        contacts.filter((contact) => contact._id !== id)
      );
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const handleEditProject = (project) => {
    setEditingProject({ ...project });
    setProjectStatus("");
  };

  const handleProjectChange = (e) => {
    setEditingProject({
      ...editingProject,
      [e.target.name]: e.target.value,
    });
  };

  const updateProject = async (e) => {
    e.preventDefault();

    if (!editingProject) return;

    setSavingProject(true);
    setProjectStatus("");

    try {
      const response = await axios.put(
        `http://localhost:5001/api/projects/${editingProject._id}`,
        {
          number: editingProject.number,
          title: editingProject.title,
          category: editingProject.category,
          description: editingProject.description,
          technologies: editingProject.technologies,
          image: editingProject.image,
          liveUrl: editingProject.liveUrl,
          githubUrl: editingProject.githubUrl,
        }
      );

      setProjects(
        projects.map((project) =>
          project._id === response.data._id
            ? response.data
            : project
        )
      );

      setEditingProject(null);
      setProjectStatus("Project updated successfully!");
    } catch (error) {
      console.error("Error updating project:", error);
      setProjectStatus("Failed to update project.");
    } finally {
      setSavingProject(false);
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-container">

        {/* ================= CONTACT MESSAGES ================= */}

        <div className="admin-header">
          <div>
            <span className="admin-label">ADMIN</span>
            <h1>Contact Messages</h1>
            <p>Messages received through your portfolio.</p>
          </div>

          <div className="message-count">
            {contacts.length}
            <span>Messages</span>
          </div>
        </div>

        {loadingContacts ? (
          <p>Loading messages...</p>
        ) : contacts.length === 0 ? (
          <div className="empty-messages">
            <h2>No messages yet</h2>
            <p>
              Messages submitted through your contact form
              will appear here.
            </p>
          </div>
        ) : (
          <div className="messages-list">
            {contacts.map((contact) => (
              <div
                className="message-card"
                key={contact._id}
              >
                <div className="message-top">
                  <div>
                    <h2>{contact.name}</h2>

                    <a href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </div>

                  <button
                    onClick={() =>
                      deleteContact(contact._id)
                    }
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>

                <p className="message-text">
                  {contact.message}
                </p>

                <small>
                  {new Date(
                    contact.createdAt
                  ).toLocaleString()}
                </small>
              </div>
            ))}
          </div>
        )}

        {/* ================= PROJECT MANAGEMENT ================= */}

        <div className="admin-projects">

          <div className="admin-header project-admin-header">
            <div>
              <span className="admin-label">
                PORTFOLIO
              </span>

              <h1>Manage Projects</h1>

              <p>
                Edit the projects displayed on your
                portfolio.
              </p>
            </div>

            <div className="message-count">
              {projects.length}
              <span>Projects</span>
            </div>
          </div>

          {projectStatus && (
            <p className="project-status">
              {projectStatus}
            </p>
          )}

          {loadingProjects ? (
            <p>Loading projects...</p>
          ) : projects.length === 0 ? (
            <div className="empty-messages">
              <h2>No projects found</h2>
              <p>
                Add projects to your database to manage
                them here.
              </p>
            </div>
          ) : (
            <div className="admin-project-list">
              {projects.map((project) => (
                <div
                  className="admin-project-card"
                  key={project._id}
                >
                  <div>
                    <span className="project-number">
                      {project.number}
                    </span>

                    <h2>{project.title}</h2>

                    <p className="admin-project-category">
                      {project.category}
                    </p>

                    <p>
                      {project.description}
                    </p>
                  </div>

                  <button
                    className="edit-button"
                    onClick={() =>
                      handleEditProject(project)
                    }
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* ================= EDIT PROJECT FORM ================= */}

          {editingProject && (
            <div className="edit-project-container">

              <div className="edit-project-header">
                <div>
                  <span className="admin-label">
                    EDIT PROJECT
                  </span>

                  <h2>
                    {editingProject.title}
                  </h2>
                </div>

                <button
                  type="button"
                  className="cancel-button"
                  onClick={() =>
                    setEditingProject(null)
                  }
                >
                  Cancel
                </button>
              </div>

              <form
                onSubmit={updateProject}
                className="project-edit-form"
              >

                <div className="form-group">
                  <label>Project Number</label>

                  <input
                    type="text"
                    name="number"
                    value={editingProject.number}
                    onChange={handleProjectChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Title</label>

                  <input
                    type="text"
                    name="title"
                    value={editingProject.title}
                    onChange={handleProjectChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Category</label>

                  <input
                    type="text"
                    name="category"
                    value={editingProject.category}
                    onChange={handleProjectChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Description</label>

                  <textarea
                    name="description"
                    value={editingProject.description}
                    onChange={handleProjectChange}
                    rows="5"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Technologies</label>

                  <input
                    type="text"
                    name="technologies"
                    value={editingProject.technologies}
                    onChange={handleProjectChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Image</label>

                  <input
                    type="text"
                    name="image"
                    value={editingProject.image}
                    onChange={handleProjectChange}
                  />
                </div>

                <div className="form-group">
                  <label>Live Demo URL</label>

                  <input
                    type="url"
                    name="liveUrl"
                    value={editingProject.liveUrl}
                    onChange={handleProjectChange}
                  />
                </div>

                <div className="form-group">
                  <label>GitHub URL</label>

                  <input
                    type="url"
                    name="githubUrl"
                    value={editingProject.githubUrl}
                    onChange={handleProjectChange}
                  />
                </div>

                <div className="project-form-actions">

                  <button
                    type="submit"
                    className="save-project-button"
                    disabled={savingProject}
                  >
                    {savingProject
                      ? "Saving..."
                      : "Save Changes"}
                  </button>

                  <button
                    type="button"
                    className="cancel-button"
                    onClick={() =>
                      setEditingProject(null)
                    }
                  >
                    Cancel
                  </button>

                </div>

              </form>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default Admin;
