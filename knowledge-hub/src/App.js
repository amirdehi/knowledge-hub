import React, { useState, useEffect } from 'react';
import './App.css';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';
import axios from 'axios';

function App() {
    const [messages, setMessages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch messages from backend
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/messages', {
                    params: { search: searchTerm },
                });
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, [searchTerm]);

    const addMessage = async (newMessage) => {
        try {
            const response = await axios.post('http://localhost:5000/api/messages', newMessage);
            setMessages([...messages, response.data]);
        } catch (error) {
            console.error('Error adding message:', error);
        }
    };

    return (
        <div className="App">
            <header>
                <h1>KnowledgeHub</h1>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search knowledge base..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button>Search</button>
                </div>
            </header>
            <main>
                <MessageList messages={messages} />
                <MessageForm addMessage={addMessage} />
            </main>
        </div>
    );
}

export default App;
