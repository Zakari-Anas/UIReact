// TabHeader.js
import React from "react";
import { Link } from "react-router-dom";
import "./css/Sidebar.css";

const TabHeader = ({ tabs, handleAddTab, handleRemoveTab, activeTabId, handleDragInTab }) => {
  return (
    <div className="tab-header">
      {tabs.map((tab) => (
        <div key={tab.id}>
          <Link to={`/tab/${tab.id}`}>Scene {tab.id}</Link>
          {tabs.length > 1 && <button onClick={() => handleRemoveTab(tab.id)}>Remove Tab</button>}
          <button onClick={() => handleDragInTab(tab.id)}>Enable Drag</button>
        </div>
      ))}
      <button onClick={handleAddTab}>Add Tab</button>
    </div>
  );
};

export default TabHeader;