import React, { useState, useEffect, useRef } from "react";
import { useTableData } from "../../../helpers/useTableData";
import {
  validateName,
  validateSurname,
  validateAge,
} from "../../../helpers/validation";
import tableHeaders from "../../../assets/tableHeaders.json";
import CustomSelect from "../../molecules/CustomSelect/CustomSelect";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import TableRow from "../../molecules/TableRow/TableRow";
import TableHeader from "../../molecules/TableHeader/TableHeader";
import Modal from "../../organisms/Modal/Modal";
import "./Table.scss";

function Table() {
  const { tableData, handleAddRecord, handleEditRecord, handleDeleteRecord } =
    useTableData();
  const [isModalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [errors, setErrors] = useState({ name: "", surname: "", age: "" });
  const modalRef = useRef();

  const handleCloseModal = () => {
    setModalOpen(false);
    clearModalFields();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (value, validator, stateSetter, errorField) => {
    const errorMessage = validator(value);
    setErrors({ ...errors, [errorField]: errorMessage });
    stateSetter(value);
  };

  const hasErrors = () =>
    errors.name !== "" || errors.surname !== "" || errors.age !== "";
  const isAnyFieldEmpty = () =>
    name.trim() === "" ||
    surname.trim() === "" ||
    age.trim() === "" ||
    city.trim() === "";

  const handleModalRecordSubmit = () => {
    if (isAnyFieldEmpty() || hasErrors()) {
      return;
    }

    const newRecord = { name, surname, age, city };
    handleAddRecord(newRecord, isEditing, editingIndex);

    clearModalFields();
    handleCloseModal();
  };

  const handleRowEdit = (index) => {
    const record = handleEditRecord(index);
    setName(record.name);
    setSurname(record.surname);
    setAge(record.age);
    setCity(record.city);

    setIsEditing(true);
    setEditingIndex(index);
    setModalOpen(true);
  };

  const clearModalFields = () => {
    setName("");
    setSurname("");
    setAge("");
    setCity("");
    setIsEditing(false);
    setEditingIndex(null);
  };

  const cityOptions = ["Riga", "Daugavpils", "Jūrmala", "Ventspils"];

  const viewportHeight = 90;
  const rowHeight = 30;
  const rowCount = Math.ceil(viewportHeight / rowHeight);
  const emptyRows = Array.from({ length: rowCount }, (_, rowIndex) => (
    <tr
      className="empty-row"
      key={`empty-${rowIndex}`}
      onClick={() => setModalOpen(true)}
    >
      {Array(tableHeaders.length + 1).fill(<td></td>)}
    </tr>
  ));

  const modalContent = (
    <>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          handleInputChange(e.target.value, validateName, setName, "name")
        }
        error={errors.name}
      />
      <Input
        type="text"
        placeholder="Surname"
        value={surname}
        onChange={(e) =>
          handleInputChange(
            e.target.value,
            validateSurname,
            setSurname,
            "surname"
          )
        }
        error={errors.surname}
      />
      <Input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) =>
          handleInputChange(e.target.value, validateAge, setAge, "age")
        }
        error={errors.age}
      />
      <CustomSelect options={cityOptions} value={city} onChange={setCity} />
      <Button
        onClick={handleModalRecordSubmit}
        className={`add-button ${
          isAnyFieldEmpty() || hasErrors() ? "disabled" : ""
        }`}
        disabled={isAnyFieldEmpty() || hasErrors()}
      >
        {isEditing ? "SAVE" : "ADD"}
      </Button>
    </>
  );

  return (
    <div>
      <table className="table-generator">
        <TableHeader headers={tableHeaders} />
        <tbody className="table-body">
          {tableData.map((record, index) => (
            <TableRow
              key={index}
              record={record}
              index={index}
              onEdit={() => handleRowEdit(index)}
              onDelete={() => handleDeleteRecord(index)}
            />
          ))}
          {emptyRows}
        </tbody>
      </table>
      <Modal isOpen={isModalOpen}>
        <div ref={modalRef}>{modalContent}</div>
      </Modal>
    </div>
  );
}

export default Table;
