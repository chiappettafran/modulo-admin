import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SalesView from './components/SalesView';
import UsersView from './components/UsersView';
import ProductsView from './components/ProductsView';
import './styles/styles.css';

const App = () => {
    const [activeTab, setActiveTab] = useState('Sales');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Estado para manejar la visibilidad de la barra lateral

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="dashboard-container">
            <button className="hamburger-button" onClick={toggleSidebar}>
                ☰
            </button>
            <Sidebar
                activeTab={activeTab}
                onTabChange={handleTabChange}
                isSidebarOpen={isSidebarOpen}
            />
            <div className="content">
                {activeTab === 'Sales' && <SalesView />}
                {activeTab === 'Users' && <UsersView />}
                {activeTab === 'Products' && <ProductsView />}
            </div>
        </div>
    );
};

export default App;