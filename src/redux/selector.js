import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchFilterChange = (state) => state.filters.search;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchFilterChange,
  (todoList, searchText) => {
    return todoList.filter((todo) => {
      return todo.name.includes(searchText);
    })
  }
);
