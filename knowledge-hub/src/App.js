import React, { useState } from 'react';
import './App.css';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';

function App() {
    const [messages, setMessages] = useState([]);

    const addMessage = (newMessage) => {
        setMessages([...messages, newMessage]);
    };

    return (
        <div className="App">
            <header>
                <h1>KnowledgeHub</h1>
                <div className="search-bar">
                    <input type="text" placeholder="Search knowledge base..." />
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