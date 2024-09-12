import React from 'react';

const Sidebar = ({ activeTab, onTabChange, isSidebarOpen }) => {
    return (
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <a
                href="#"
                className={activeTab === 'Sales' ? 'active' : ''}
                onClick={() => onTabChange('Sales')}
            >
                Sales
            </a>
            <a
                href="#"
                className={activeTab === 'Users' ? 'active' : ''}
                onClick={() => onTabChange('Users')}
            >
                Users
            </a>
            <a
                href="#"
                className={activeTab === 'Products' ? 'active' : ''}
                onClick={() => onTabChange('Products')}
            >
                Products
            </a>
        </div>
    );
};

export default Sidebar;