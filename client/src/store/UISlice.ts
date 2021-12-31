import { createSlice } from "@reduxjs/toolkit";
interface UISliceState {
  modalView: string;
  isModalView: boolean;
  isModalSearch: boolean;
}
const initialState: UISliceState = {
  modalView: "",
  isModalView: false,
  isModalSearch: false,
};
export const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setModalView: (state, action) => (state.modalView = action.payload),
    setIsShowModalView(state) {
      state.isModalView = !state.isModalView;
    },
    setIsShowSearch(state) {
      state.isModalSearch = !state.isModalSearch;
    },
  },
});
export const UIActions = UISlice.actions;
const UIReducer = UISlice.reducer;
export default UIReducer;
