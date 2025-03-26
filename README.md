# 🚀 Project Name

## 📌 Table of Contents
- [Introduction](#introduction)
- [Demo](#demo)
- [Inspiration](#inspiration)
- [What It Does](#what-it-does)
- [How We Built It](#how-we-built-it)
- [Challenges We Faced](#challenges-we-faced)
- [How to Run](#how-to-run)
- [Tech Stack](#tech-stack)
- [Team](#team)

---

# High Incidents Dashboard

The **High Incidents Dashboard** is a React-based application that provides a user-friendly interface for monitoring and managing high-priority incidents. It includes features like filtering incidents, viewing detailed logs, and interacting with an AI-powered chat system for root cause analysis (RCA) and recommendations.

---

## Features

- **Incident Filtering**: Filter incidents by status and impact.
- **Incident Details**: View detailed descriptions and logs for each incident.
- **AI-Powered Chat**: Interact with an AI system to analyze incidents and receive recommendations.
- **Responsive Modal**: Chat functionality is displayed in a modal for better user experience.
- **Dynamic Chat History**: Maintains a history of user and AI interactions for each incident.

---

## Project Structure


### Key Files
- **`HighIncidents.js`**: Handles the high-priority incidents, including filtering, chat functionality, and modal display.
- **`ActiveIncidents.js`**: Displays active incidents with filtering and chat integration.
- **`logsInfo.json`**: Contains log data for incidents.
- **`App.js`**: Main entry point for routing and rendering components.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm start


Usage
1. Login: Start by logging into the application.
2. Dashboard: Navigate to the dashboard to view incidents.
3. Filter Incidents: Use the dropdowns to filter incidents by status or impact.
4.Chat with AI:
   - Click the chat icon (💬) next to an incident to open the chat modal.
   - Ask questions related to the incident, such as "What is the root cause?" or "What are the recommended solutions?"
   - View AI responses and maintain a history of the conversation.

Dependencies
   - React: Frontend framework for building the UI.
   - React Router: For routing between pages.
   - Custom GROQ Integration: chatWithGroq function for     AI-powered responses.

Customization
   Modify AI Chat Behavior
      The AI chat functionality is powered by the chatWithGroq function. You can customize the prompts and responses in the following sections:

      - handleIncidentClick: Initial AI prompt for analyzing logs.
      - handleSendMessage: Dynamic prompts based on user input and chat history.

Future Enhancements
   - Add authentication and role-based access control.
   - Integrate real-time updates for incident statuses.
   - Improve the AI chat system with more advanced natural - language processing (NLP) capabilities.
   - Add export functionality for incident reports.
## 🎥 Demo
🔗 [Live Demo](#) (if applicable)  
📹 [Video Demo](#) (if applicable)  
🖼️ Screenshots:

![Screenshot 1](link-to-image)

## 💡 Inspiration
What inspired you to create this project? Describe the problem you're solving.

## ⚙️ What It Does
Explain the key features and functionalities of your project.

## 🛠️ How We Built It
Briefly outline the technologies, frameworks, and tools used in development.

## 🚧 Challenges We Faced
Describe the major technical or non-technical challenges your team encountered.

## 🏃 How to Run
1. Clone the repository  
   ```sh
   git clone https://github.com/ewfx/gaipl-code-crafters
   ```
2. Install dependencies  
   - Navigate to code/ui/ipe directory
   - Do npm install
   
3. Run the project  
   - Run npm start

4. For Sign in
   - Use username(admin) and password(admin123)

## 🏗️ Tech Stack
- 🔹 Frontend: React
- 🔹 Backend: Node.js / FastAPI / Django
- 🔹 Database: PostgreSQL / Firebase
- 🔹 Other: OpenAI API / Twilio / Stripe

## 👥 Team
- **Code Crafters** - Ajay Vanaparthi
- **Teammates** - Boda Ramu, Anvesh Bathini, ChandraMohan Puduchery, Srikanth Eppalapally