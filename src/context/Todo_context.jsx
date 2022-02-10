import React, { createContext } from "react";
import { useState } from "react";

export const Todo_context = createContext();
const initialToDo = [
  {
    id: 1,
    toDoText: "Wash yesterday's dishes",
    toDoActive: false,
  },
  {
    id: 2,
    toDoText: "End the weekly activity",
    toDoActive: true,
  },
  {
    id: 3,
    toDoText: "Notify the government of my change of address",
    toDoActive: true,
  },
];

export const Todo_provider = ({ children }) => {
  const [data, setData] = useState(initialToDo);
  return (
    <Todo_context.Provider value={{ data, setData }}>
      {children}
    </Todo_context.Provider>
  );
};
