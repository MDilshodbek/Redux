import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slices/todoSlices";

export default configureStore({
  reducer: {
    todo: todoSlice,
  },
});
