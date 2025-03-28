import React from 'react';
import ChatInterface from './components/ChatInterface';
import Popups from './components/Popups';
import Animations from './components/Animations';

const App = () => {
    return (
        <div className="app-container">
            <Animations />
            <Popups />
            <ChatInterface />
        </div>
    );
};

export default App;