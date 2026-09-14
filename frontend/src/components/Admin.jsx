import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/contacts"
      );

      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
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

  return (
    <div className="admin-page">
      <div className="admin-container">

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

        {loading ? (
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
              <div className="message-card" key={contact._id}>

                <div className="message-top">
                  <div>
                    <h2>{contact.name}</h2>
                    <a href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </div>

                  <button
                    onClick={() => deleteContact(contact._id)}
                    className="delete-button"
                  >
                    Delete
                  </button>
                </div>

                <p className="message-text">
                  {contact.message}
                </p>

                <small>
                  {new Date(contact.createdAt).toLocaleString()}
                </small>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Admin;
