import SvgDelete from "../UI/SvgDelete";

const TodoItem = (props) => {
  const checkBoxHandler = () => {
    props.setTodos(
      props.todos.map((item) => {
        if (item.id === props.todo.id)
          return { ...item, completed: !item.completed };
        return item;
      })
    );
  };
  const deleteHandler = () => {
    props.setTodos(props.todos.filter((item) => item.id !== props.todo.id));
  };
  return (
    <li className="todo-list__item">
      <input
        type="checkbox"
        defaultChecked={props.todo.completed}
        onChange={checkBoxHandler}
      />
      <label className={props.todo.completed ? "strikethrough " : ""}>
        {props.goal}
      </label>
      {props.status === "completed" ? (
        <div onClick={deleteHandler}>
          <SvgDelete className="icon-delete" />
        </div>
      ) : (
        ""
      )}
    </li>
  );
};
export default TodoItem;
