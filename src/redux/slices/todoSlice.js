import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    data: [],
  },
  reducers: {
    addTodo(state, { payload }) {
      state.data = [
        ...state.data,
        { id: v4(), completed: false, text: payload.text },
      ];
    },
    toggleTodo(state, { payload }) {
      state.data = state.data.map(
        ({ id }) =>
          (id = payload.id ? { ...state, completed: !state.completed } : state)
      );
    },
    removeTodo(state, { payload }) {
      state.data = state.data.filter(({ id }) => id !== payload.id);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
