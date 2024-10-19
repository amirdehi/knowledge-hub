import React from 'react';

function MessageList({ messages }) {
    return (
        <div className="message-list">
            {messages.length > 0 ? (
                messages.map((message, index) => (
                    <div key={index} className="message">
                        <h2>{message.title}</h2>
                        <p>{message.content}</p>
                    </div>
                ))
            ) : (
                <p>No messages available</p>
            )}
        </div>
    );
}

export default MessageList;
