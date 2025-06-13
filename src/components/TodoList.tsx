import { useState } from "react";
import TodoTable from "./TodoTable";

interface ITodo {
  id: number;
  title: string;
  isComplete: boolean;
}

const TodoList = () => {
  // const todos = [
  //   {
  //     id: 1,
  //     title: "Learn React TypeScript",
  //     isComplete: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Subscribe Youtube HoiDanIT",
  //     isComplete: true,
  //   },
  //   {
  //     id: 3,
  //     title: "Learn English",
  //     isComplete: true,
  //   },
  // ];

  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleAddTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleAddTodoList = () => {
    setTodo("");
    setTodoList([
      ...todoList,
      {
        id: Math.round(Math.random() * 10000000000),
        title: todo,
        isComplete: false,
      },
    ]);
  };

  const handleDeleteTodoList = (id: number) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <div className="container mx-auto flex flex-col items-center justify-center">
      <div>My TodoList</div>
      <div>
        <input
          type="text"
          placeholder="Enter your todo"
          className="outline-none"
          value={todo}
          onChange={handleAddTodo}
        />
        <button
          type="submit"
          className="cursor-pointer"
          onClick={handleAddTodoList}
        >
          Add
        </button>
      </div>
      <TodoTable todos={todoList} handleDeleteTodoList={handleDeleteTodoList} />
    </div>
  );
};
export default TodoList;
