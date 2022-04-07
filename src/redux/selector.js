import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const searchFilterChange = (state) => state.filters.search;
export const filtersStatusSelector = (state) => state.filters.status;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  filtersStatusSelector,
  searchFilterChange,
  (todoList, status, prioriry, searchText) => {
    return todoList.filter((todo) => {
      if(status === 'All'){
        return todo.name.includes(searchText)
      }
      
      return (
        todo.name.includes(searchText) &&
        (status === "Completed"
          ? todo.completed
          : !todo.completed)
      );
    });
  }
);
