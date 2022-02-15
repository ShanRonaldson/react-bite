import { useState } from "react";

interface ToDoListData {
  description: string;
  date: string;
}

export const ToDoList = () => {
  const [desc, setDec] = useState<string[]>([]);
  const [todos, setTodos] = useState<ToDoListData[]>([]);

  const inputChanged = (event: any) => {
    setDec(event.target.value);
    console.log(desc)
  };

  const addTodo = (event: any) => {
    setTodos([...todos, { description: event.target.value, date: event.target.value }]);
  };

  return (
    <div>
      <label htmlFor="date"></label>

      <input type="text" onChange={inputChanged} value={desc} id="date" />
      <label htmlFor="description"></label>
      <input
        type="text"
        onChange={inputChanged}
        value={desc}
        id="description"
      />
      <button onClick={addTodo}>Add</button>
      <table>
        <thead>
          <tr>
            <td>Date</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/*
configured from https://dev.to/joelynn/react-hooks-working-with-state-arrays-2n2g
*/
