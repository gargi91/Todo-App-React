import "./TodoList.css";
import TodoItem from "./TodoItem";
import SvgDelete from "../UI/SvgDelete";

const TodoList = (props) => {
  const deleteAllHandler = () => {
    props.setTodos(props.todos.filter((item) => !item.completed));
  };

  let content;

  if (props.filteredTodos.length > 0) {
    content = props.filteredTodos.map((todo) => (
      <TodoItem
        key={todo.id}
        goal={todo.goal}
        todo={todo}
        todos={props.todos}
        setTodos={props.setTodos}
        status={props.status}
      />
    ));
  } else if (props.filteredTodos.length === 0 && props.status !== "completed") {
    content = <p style={{ textAlign: "center" }}>Nothing to display here!</p>;
  } else {
    content = (
      <p style={{ textAlign: "center" }}>
        Hurrah!🥳 You have completed all your tasks.
      </p>
    );
  }
  return (
    <ul className="todo-list">
      {content}
      {props.status === "completed" && props.filteredTodos.length > 0 ? (
        <button onClick={deleteAllHandler}>
          <SvgDelete className="icon-delete-btn" />
          Delete all
        </button>
      ) : (
        ""
      )}
    </ul>
  );
};

export default TodoList;
