import { createSlice } from "@reduxjs/toolkit";

const tableSlice = createSlice({
  name: "table",
  initialState: {
    data: [],
  },
  reducers: {
    addRecord: (state, action) => {
      state.data.push(action.payload);
    },
    deleteRecord: (state, action) => {
      state.data.splice(action.payload, 1);
    },
    editRecord: (state, action) => {
      const { index, data } = action.payload;
      state.data[index] = { ...state.data[index], ...data };
    },
    updateTableData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addRecord, deleteRecord, editRecord, updateTableData } =
  tableSlice.actions;
export default tableSlice.reducer;
