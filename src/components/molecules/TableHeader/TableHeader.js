import React from "react";
import "./TableHeader.scss";

export function TableHeader({ headers }) {
  return (
    <thead className="table-header">
      <tr>
        {headers.map((header) => (
          <th key={header.id}>{header.label}</th>
        ))}
        <th></th> {/* Empty header for action buttons */}
      </tr>
    </thead>
  );
}

export default TableHeader;
