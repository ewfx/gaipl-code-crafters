import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('activeIncidents');

    const renderContent = () => {
        switch (activeTab) {
            case 'activeIncidents':
                return <div>Active Incidents Content</div>;
            case 'highPriorityIncidents':
                return <div>High Priority Incidents Content</div>;
            default:
                return <div>Select a tab to view content</div>;
        }
    };

    return (
        <div className="dashboard">
            <h1>Platform Environment Dashboard</h1>
            <nav className="navigation">
                <button onClick={() => setActiveTab('activeIncidents')} className={activeTab === 'activeIncidents' ? 'active' : ''}>
                    Active Incidents
                </button>
                <button onClick={() => setActiveTab('highPriorityIncidents')} className={activeTab === 'highPriorityIncidents' ? 'active' : ''}>
                    High Priority Incidents
                </button>
            </nav>
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
};

export default Dashboard;