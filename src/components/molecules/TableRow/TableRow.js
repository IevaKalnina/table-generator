import React from "react";
import PropTypes from "prop-types";
import "./TableRow.scss"

export default function TableRow({ record, index, onEdit, onDelete }) {
  return (
    <tr>
      <td>{record.name}</td>
      <td>{record.surname}</td>
      <td>{record.age}</td>
      <td>{record.city}</td>
      <td className="action-buttons">
        <span className="edit-action" onClick={() => onEdit(index)}>
          Edit
        </span>
        <span className="delete-action" onClick={() => onDelete(index)}>
          Delete
        </span>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  record: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
