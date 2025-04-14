import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Tickets() {
    const [tickets, setTickets] = useState([]);
    const [editing, setEditing] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [newTicket, setNewTicket] = useState({ name: '', price: '', description: '' });

    useEffect(() => {
        fetchTickets();
    }, []);

    const fetchTickets = async () => {
        try {
            const token = localStorage.getItem("token")?.replace(/^"(.*)"$/, "$1");
            const res = await axios.get("http://localhost:5000/api/ticket", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setTickets(res.data.tickets);
        } catch (error) {
            console.error("Error fetching tickets:", error);
        }
    };

    const handleEditClick = (ticket) => {
        setEditing({ ...ticket });
    };

    const handleCancelEdit = () => {
        setEditing(null);
    };

    const handleSave = async (id) => {
        try {
            const token = localStorage.getItem("token")?.replace(/^"(.*)"$/, "$1");
            await axios.put(
                "http://localhost:5000/api/ticket/update",
                {
                    ticketId: editing._id,
                    name: editing.name,
                    price: editing.price,
                    description: editing.description
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
        } catch (error) {
            console.error("Error saving ticket:", error);
        }
        handleCancelEdit();
        fetchTickets();
    };

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem("token")?.replace(/^"(.*)"$/, "$1");
            await axios.delete(
                "http://localhost:5000/api/ticket/delete",
                {
                    headers: { Authorization: `Bearer ${token}` },
                    data: { ticketId: id }
                }
            );
        } catch (error) {
            console.error("Error deleting ticket:", error);
        }
        fetchTickets();
    };

    const handleNewChange = (e) => {
        setNewTicket({ ...newTicket, [e.target.name]: e.target.value });
    };

    const handleAddSubmit = async () => {
        if (!newTicket.name || !newTicket.price || !newTicket.description) return;

        try {
            const token = localStorage.getItem("token")?.replace(/^"(.*)"$/, "$1");
            await axios.post(
                "http://localhost:5000/api/ticket/add",
                newTicket,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            fetchTickets();
            setNewTicket({ name: '', price: '', description: '' });
            setShowForm(false);
        } catch (error) {
            console.error("Error adding ticket:", error);
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
                {showForm ? 'Cancel' : 'Add Ticket'}
            </button>

            {showForm && (
                <div style={styles.formContainer}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={newTicket.name}
                        onChange={handleNewChange}
                        style={styles.input}
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={newTicket.price}
                        onChange={handleNewChange}
                        style={styles.input}
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={newTicket.description}
                        onChange={handleNewChange}
                        style={{ ...styles.input, height: '100px' }}
                    />
                    <button style={styles.actionButton} onClick={handleAddSubmit}>
                        Submit
                    </button>
                </div>
            )}

            {tickets.map((t) => (
                <div key={t._id} style={styles.card}>
                    {editing && editing._id === t._id ? (
                        <>
                            <input
                                type="text"
                                value={editing.name}
                                onChange={(e) => setEditing({ ...editing, name: e.target.value })}
                                style={styles.input}
                            />
                            <input
                                type="number"
                                value={editing.price}
                                onChange={(e) => setEditing({ ...editing, price: e.target.value })}
                                style={styles.input}
                            />
                            <textarea
                                value={editing.description}
                                onChange={(e) => setEditing({ ...editing, description: e.target.value })}
                                style={{ ...styles.input, height: '100px' }}
                            />
                            <div>
                                <button
                                    style={{ ...styles.actionButton, backgroundColor: '#10b981', color: '#fff' }}
                                    onClick={() => handleSave(t._id)}
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
                            <div style={styles.title}>{t.name}</div>
                            <p><strong>Price:</strong> ${t.price}</p>
                            <p>{t.description}</p>
                            <div>
                                <button
                                    style={{ ...styles.actionButton, backgroundColor: '#3b82f6', color: '#fff' }}
                                    onClick={() => handleEditClick(t)}
                                >
                                    Edit
                                </button>
                                <button
                                    style={{ ...styles.actionButton, backgroundColor: '#ef4444', color: '#fff' }}
                                    onClick={() => handleDelete(t._id)}
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
