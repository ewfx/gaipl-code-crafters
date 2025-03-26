import React, { useState, useEffect, useRef } from 'react';
import info from './incidents.json';
import logsInfo from './logsInfo.json';
import chatWithGroq from '../../groq';
import './HighIncidents.css';

const ActiveIncidents = () => {
  const [incidents, setIncidents] = useState([]);
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterImpact, setFilterImpact] = useState('All');
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const chatWindowRef = useRef(null);

  useEffect(() => {
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

  const handleIncidentClick = async (incident) => {
    console.log('inc 1st', incident);
    console.log('logsInfo 1st', logsInfo);
    const logsData = logsInfo.filter((item) => incident.incident_id === item.incident_id);
    console.log('inc', JSON.stringify(logsData[0].logs));
    const response = await chatWithGroq(`Analyze RCA ${incident.description} and error logs as ${JSON.stringify(logsData[0].logs)} to identify root cause and provide recommended solutions with in 10lines`)
    setSelectedIncident(incident);
    setChatMessages([{text:response}]);
    setIsModalOpen(true); // Open the modal
  };

  const handleUserInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() && selectedIncident) {
      const userMessage = { text: userInput, sender: 'user' };
      setChatMessages((prevMessages) => [...prevMessages, userMessage]);

      try {
        // Format history for Groq API
        const formattedHistory = chatMessages
          .map((message) => `${message.sender}: ${message.text}`)
          .join('\n');

        const prompt = `${formattedHistory}\nuser: ${userInput}\nai: in 3 lines`; // Add user input to prompt

        const aiResponse = await chatWithGroq(prompt); // Send the whole prompt including history

        const aiMessage = { text: aiResponse, sender: 'ai' };
        setChatMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error('Error with Groq API:', error);
        // Handle error, e.g., display an error message
      }

      setUserInput('');
    }
  };


  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIncident(null);
  };

  return (
    <div>
      <h1>Active Incident Dashboard</h1>
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
            <th>AI Assist</th>
            <th>Incident ID</th>
            <th>Description - RCA</th>
            <th>Impact</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredIncidents.map((incident) => (
            <tr key={incident.incident_id}>
              <td style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    backgroundColor: '#d8f3fc',
                  }} onClick={() => handleIncidentClick(incident)}>
                <span
                  style={{
                    cursor: 'pointer',
                    fontSize: '30px'
                  }}
                  title="Open Chat"

                >
                  💬
                </span>
              </td>
              <td>{incident.incident_id}</td>
              <td>{incident.description}</td>
              <td>{incident.impact}</td>
              <td>{incident.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '20px',
            zIndex: 1000,
            width: '70%'
          }}
        >
          <h2>Incident Chat ({selectedIncident.incident_id})</h2>
          <div
            ref={chatWindowRef}
            style={{
              border: '1px solid #ccc',
              height: '200px',
              overflowY: 'auto',
              padding: '10px',
              marginBottom: '10px',
            }}
          >
            {chatMessages.map((message, index) => (
              <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
                <strong>{message.sender === 'user' ? 'You' : 'AI'}:</strong> {message.text}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <input
              type="text"
              value={userInput}
              onChange={handleUserInputChange}
              style={{ flex: 1, padding: '5px' }}
              placeholder='Ask Question realated to incident'
            />
            <button onClick={handleSendMessage} style={{ padding: '5px 10px', marginLeft: '5px', width: '150px' }}>
              Send
            </button>
          </div>
          <button
            onClick={closeModal}
            style={{
              padding: '5px 10px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '150px'
            }}
          >
            Close
          </button>
        </div>
      )}

      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
          onClick={closeModal}
        ></div>
      )}
    </div>
  );
};

export default ActiveIncidents;