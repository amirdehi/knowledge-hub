# KnowledgeHub

**KnowledgeHub** is a simple knowledge-sharing application designed for team members or employees of a company. It allows users to add and search through messages in a local knowledge base. The app is designed to run on a local network but can later be expanded for internet deployment.

## Features

- **Message List**: Displays all knowledge messages.
- **Search Functionality**: A search bar allows users to search through the message titles and contents.
- **Add New Messages**: Allows users to add new messages to the knowledge base.
- **Message Approval**: All new messages must be approved by the user running the web server before they are visible to others.
- **Local Network Access**: The application is hosted on a local server, accessible by other PCs using the server's IP address.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Installation

### 1. Clone the Repository

  git clone https://github.com/your-username/knowledgehub.git

  cd knowledgehub

### 2. Install Dependencies

For the frontend:

  cd knowledge-hub

  npm install

For the backend:

  cd backend

  npm install

### 3. Set Up Environment Variables

Create a .env file in the backend folder with the following content:

  MONGODB_URI=mongodb://yourUsername:yourPassword@localhost:27017/knowledgehub

Note: Replace yourUsername and yourPassword with your MongoDB credentials.

### 4. Run the Application
Backend:

  cd backend

  npm start


Frontend:

In a separate terminal, run:

  cd frontend

  npm start

The app should now be accessible at http://localhost:3000 on your local machine.
