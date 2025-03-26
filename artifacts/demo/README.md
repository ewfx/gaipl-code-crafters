
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
