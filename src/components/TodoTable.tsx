interface IProps {
  todos: {
    id: number;
    title: string;
    isComplete: boolean;
  }[];
  handleDeleteTodoList: (id: number) => void;
}

const TodoTable = ({ todos, handleDeleteTodoList }: IProps) => {
  return (
    <>
      {todos.map((item) => {
        return (
          <div className="space-x-2">
            <span key={item.id}>{item.title}</span>
            <button
              className="cursor-pointer bg-red-500"
              onClick={() => handleDeleteTodoList(item.id)}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};
export default TodoTable;
