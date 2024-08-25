import React, { useEffect, useState } from "react";
import "./styles.css";
import CreateTheatreTab from "./components/create-theatre";
import CreateMovieTab from "./components/create-movies";

const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("create-theatre");

  const selectTab = (tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    const activeTab = document.querySelector(".active");
    const selectedElement = document.querySelector(`.${selectedTab}`);
    if (activeTab && selectedElement) {
      activeTab.classList.remove("active");
      selectedElement.classList.add("active");
    }
  }, [selectedTab]);

  return (
    <div className="admin-dashboard-container">
      <div className="sidebar">
        <div className="sidebar-item">
          <h4>Create</h4>
          <ul>
            <li
              className="create-theatre active"
              onClick={() => selectTab("create-theatre")}
            >
              Theatre
            </li>
            <li
              className="create-movies"
              onClick={() => selectTab("create-movies")}
            >
              Movies
            </li>
            <li
              className="create-halls"
              onClick={() => selectTab("create-halls")}
            >
              Halls
            </li>
          </ul>
        </div>
        <div className="sidebar-item">
          <h4>Manage</h4>
          <ul>
            <li
              className="manage-shows"
              onClick={() => selectTab("manage-shows")}
            >
              Create Show
            </li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        {selectedTab === "create-theatre" && <CreateTheatreTab />}
        {selectedTab === "create-movies" && <CreateMovieTab />}
      </div>
    </div>
  );
};

export default AdminDashboard;
