import React, { useState } from 'react';

function MessageForm({ addMessage }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content) {
            addMessage({ title, content });
            setTitle('');
            setContent('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="message-form">
            <div>
                <input
                    type="text"
                    placeholder="Message Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
        <textarea
            placeholder="Message Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
        ></textarea>
            </div>
            <button type="submit">Add Message</button>
        </form>
    );
}

export default MessageForm;
