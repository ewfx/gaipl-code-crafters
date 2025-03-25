import React, { useState, useEffect, useRef } from 'react';
import info from './incidents.json';
import './HighIncidents.css';
const HighIncidents = () => {
  const [incidents, setIncidents] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterImpact, setFilterImpact] = useState('All');
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const chatWindowRef = useRef(null);

  useEffect(() => {
    // Replace with your actual API call or data fetching logic
    const fetchedIncidents = info;
    setIncidents(fetchedIncidents);
  }, []);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const filteredIncidents = incidents.filter((incident) => {
    const statusMatch = filterStatus === 'All' || incident.status === filterStatus;
    const impactMatch = filterImpact === 'All' || incident.impact === filterImpact;
    return statusMatch && impactMatch;
  });

  const handleIncidentClick = (incident) => {
    setSelectedIncident(incident);
    setChatMessages([]); // Clear chat on new incident selection
  };

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() && selectedIncident) {
      const userMessage = { text: userInput, sender: 'user' };
      setChatMessages((prevMessages) => [...prevMessages, userMessage]);

      // Simulate AI response (replace with actual AI integration)
      const aiResponse = simulateAIResponse(userInput, selectedIncident);
      const aiMessage = { text: aiResponse, sender: 'ai' };
      setChatMessages((prevMessages) => [...prevMessages, aiMessage]);

      setUserInput('');
    }
  };

  // Simulate AI response (replace with actual AI integration)
  const simulateAIResponse = (message, incident) => {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes("impact")) {
      return `The impact of this incident (${incident.incident_id}) is ${incident.impact}.`;
    } else if (lowerCaseMessage.includes("status")) {
      return `The status of this incident (${incident.incident_id}) is ${incident.status}.`;
    } else if (lowerCaseMessage.includes("description")) {
      return `The description of this incident (${incident.incident_id}) is: ${incident.description}`;
    } else if (lowerCaseMessage.includes("workarounds") && incident.work_arounds) {
      return `Workarounds for incident ${incident.incident_id}: ${incident.work_arounds.join(", ")}`
    }
    else {
      return "I'm a simple simulation, I can only answer about impact, status, description, and workarounds if they exist.";
    }
  };

  return (
    <div>
      <h1>Incident Dashboard</h1>
      <div>
        <label>Filter by Status:</label>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All</option>
          <option value="New">New</option>
          <option value="Assigned">Assigned</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
          <option value="Closed">Closed</option>
          <option value="Pending Approval">Pending Approval</option>
        </select>

        <label>Filter by Impact:</label>
        <select value={filterImpact} onChange={(e) => setFilterImpact(e.target.value)}>
          <option value="All">All</option>
          <option value="Critical">Critical</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Incident ID</th>
            <th>Description - RCA</th>
            <th>Impact</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredIncidents.map((incident) => (
            <tr key={incident.incident_id} onClick={() => handleIncidentClick(incident)}>
              <td>{incident.incident_id}</td>
              <td>{incident.description}</td>
              <td>{incident.impact}</td>
              <td>{incident.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedIncident && (
        <div style={{ marginTop: '20px' }}>
          <h2>Incident Chat ({selectedIncident.incident_id})</h2>
          <div
            ref={chatWindowRef}
            style={{
              border: '1px solid #ccc',
              height: '200px',
              overflowY: 'auto',
              padding: '10px',
            }}
          >
            {chatMessages.map((message, index) => (
              <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
                <strong>{message.sender === 'user' ? 'You' : 'AI'}:</strong> {message.text}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', marginTop: '10px' }}>
            <input
              type="text"
              value={userInput}
              onChange={handleUserInputChange}
              style={{ flex: 1, padding: '5px' }}
            />
            <button onClick={handleSendMessage} style={{ padding: '5px 10px', width: '120px', marginLeft: '5px' }}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HighIncidents;