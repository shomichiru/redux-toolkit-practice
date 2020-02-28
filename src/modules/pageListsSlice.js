import { createSlice } from "@reduxjs/toolkit";

const pageListsSlice = createSlice({
  name: "PageLists",
  initialState: { pageList: [] },
  reducers: {
    getPageList: (state, action) => {
      action.payload.data.map(obj => {
        state.pageList.push(obj);
      });
    }
  }
});

export const { getPageList, getPageListError } = pageListsSlice.actions;
export default pageListsSlice.reducer;
