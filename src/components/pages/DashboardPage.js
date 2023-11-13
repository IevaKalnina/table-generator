import React, { useState } from "react";
import Table from "../templates/Table/Table";
import Button from "../atoms/Button/Button";
import Icon from "../atoms/Icon/Icon";
import removeIcon from "../../assets/icons/remove.svg";
import "./DashboardPage.scss";

function DashboardPage() {
  const [tableCount, setTableCount] = useState(1);

  const handleCopyTable = () => {
    setTableCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="dashboard-page">
      <div className="top-section">
        <Button className="copy-button" onClick={handleCopyTable}>
          Copy Table
        </Button>
        <Icon className="remove-icon" src={removeIcon} />
      </div>

      {Array.from({ length: tableCount }).map((_, index) => (
        <Table key={index} />
      ))}
    </div>
  );
}

export default DashboardPage;
