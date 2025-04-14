import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Announcements() {
    const [announcements, setAnnouncements] = useState([]);
    const [editing, setEditing] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [newAnnouncement, setNewAnnouncement] = useState({ title: '', content: '' });

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    const fetchAnnouncements = async () => {
        try {
            const token = localStorage.getItem("token")?.replace(/^"(.*)"$/, "$1");
            const res = await axios.get("http://localhost:5000/api/institution/announcements", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setAnnouncements(res.data.announcements);
        } catch (error) {
            console.error("Error fetching announcements:", error);
        }
    };

    const handleEditClick = (a) => {
        setEditing({ ...a });
    };

    const handleCancelEdit = () => {
        setEditing(null);
    };

    const handleSave = async (id) => {
        console.log(id)
        try {
            const token = localStorage.getItem("token")?.replace(/^"(.*)"$/, "$1");
            console.log(token)
            const res = await axios.put(
                "http://localhost:5000/api/institution/announcements/update",
                {
                    announcementId: editing._id ,
                    title: editing.title,
                    content: editing.content
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
        } catch (error) {
            console.log(error)
        }
        handleCancelEdit();
        fetchAnnouncements();
    };

    const handleDelete = async (id) => {
        console.log(id)
        try {
            const token = localStorage.getItem("token")?.replace(/^"(.*)"$/, "$1");
            console.log(token)
            const res = await axios.delete(
                "http://localhost:5000/api/institution/announcements/delete",
                {
                    headers: { Authorization: `Bearer ${token}` },
                    data: { announcementId: id }
                }
            );
        } catch (error) {
            console.log(error)
        }
        fetchAnnouncements();
    };

    const handleNewChange = (e) => {
        setNewAnnouncement({ ...newAnnouncement, [e.target.name]: e.target.value });
    };

    const handleAddSubmit = async () => {
        if (!newAnnouncement.title || !newAnnouncement.content) return;

        try {
            const token = localStorage.getItem("token")?.replace(/^"(.*)"$/, "$1");
            const res = await axios.post(
                "http://localhost:5000/api/institution/announcements/add",
                newAnnouncement,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            fetchAnnouncements();
            setNewAnnouncement({ title: '', content: '' });
            setShowForm(false);
        } catch (error) {
            console.error("Error adding announcement:", error);
        }
    };

    const styles = {
        container: {
            padding: '24px',
            width: '100%',
            boxSizing: 'border-box',
        },
        card: {
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '20px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
        },
        title: {
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '6px',
        },
        date: {
            fontSize: '0.9rem',
            color: '#666',
            marginBottom: '10px',
        },
        input: {
            width: '100%',
            marginBottom: '12px',
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
            fontSize: '1rem',
        },
        actionButton: {
            marginRight: '10px',
            padding: '8px 12px',
            fontSize: '0.9rem',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
        },
        formContainer: {
            marginBottom: '24px',
            backgroundColor: '#f3f4f6',
            padding: '20px',
            borderRadius: '10px',
        },
        addButton: {
            padding: '10px 16px',
            borderRadius: '6px',
            color: "#fff",
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer',
            marginBottom: '16px',
            backgroundColor: '#10b981',
        },
    };

    return (
        <div style={styles.container}>
            <button
                style={{ ...styles.addButton, backgroundColor: showForm ? 'red' : '#10b981' }}
                onClick={() => setShowForm(!showForm)}
            >
                {showForm ? 'Cancel' : 'Add Announcement'}
            </button>

            {showForm && (
                <div style={styles.formContainer}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={newAnnouncement.title}
                        onChange={handleNewChange}
                        style={styles.input}
                    />
                    <textarea
                        name="content"
                        placeholder="Content"
                        value={newAnnouncement.content}
                        onChange={handleNewChange}
                        style={{ ...styles.input, height: '100px' }}
                    />
                    <button style={styles.actionButton} onClick={handleAddSubmit}>
                        Submit
                    </button>
                </div>
            )}

            {announcements.map((a) => (
                <div key={a._id} style={styles.card}>
                    {editing && editing._id === a._id ? (
                        <>
                            <input
                                type="text"
                                value={editing.title}
                                onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                                style={styles.input}
                            />
                            <textarea
                                value={editing.content}
                                onChange={(e) => setEditing({ ...editing, content: e.target.value })}
                                style={{ ...styles.input, height: '100px' }}
                            />
                            <div>
                                <button
                                    style={{ ...styles.actionButton, backgroundColor: '#10b981', color: '#fff' }}
                                    onClick={() => handleSave(a._id)}
                                >
                                    Save
                                </button>
                                <button
                                    style={{ ...styles.actionButton, backgroundColor: '#6b7280', color: '#fff' }}
                                    onClick={handleCancelEdit}
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div style={styles.title}>{a.title}</div>
                            <p>{a.content}</p>
                            <div>
                                <button
                                    style={{ ...styles.actionButton, backgroundColor: '#3b82f6', color: '#fff' }}
                                    onClick={() => handleEditClick(a)}
                                >
                                    Edit
                                </button>
                                <button
                                    style={{ ...styles.actionButton, backgroundColor: '#ef4444', color: '#fff' }}
                                    onClick={() => handleDelete(a._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
