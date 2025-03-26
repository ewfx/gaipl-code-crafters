import React, { useState } from 'react';
import HighIncidents from './HighIncidents';
import './Dashboard.css';
import ActiveIncidents from './ActiveIncidents';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('activeIncidents');

    const renderContent = () => {
        switch (activeTab) {
            case 'activeIncidents':
                return <div><ActiveIncidents /></div>;
            case 'highPriorityIncidents':
                return <div><HighIncidents /></div>;
            default:
                return <div>Select a tab to view content</div>;
        }
    };

    return (
        <div className="dashboard">
            <h1>AI Enabled Integrated Platform Environment</h1>
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