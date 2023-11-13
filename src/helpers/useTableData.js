import { useSelector, useDispatch } from "react-redux";
import { addRecord, deleteRecord, editRecord } from "../store/tableSlice";

export const useTableData = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.table.data);

  const handleAddRecord = (record, isEditing, editingIndex) => {
    if (isEditing) {
      dispatch(editRecord({ index: editingIndex, data: record }));
    } else {
      dispatch(addRecord(record));
    }
  };

  const handleEditRecord = (index) => {
    const recordToEdit = tableData[index];
    return recordToEdit;
  };

  const handleDeleteRecord = (index) => {
    dispatch(deleteRecord(index));
  };

  return { tableData, handleAddRecord, handleEditRecord, handleDeleteRecord };
};
