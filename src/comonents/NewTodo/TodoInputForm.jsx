import "./TodoInputForm.css";

const TodoInputForm = (props) => {
  const inputHandler = (e) => {
    props.setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (props.inputText === "") {
      console.log("No task added!");
      return;
    }
    props.setTodos([
      ...props.todos,
      {
        id: Math.random() * 100,
        goal: props.inputText,
        completed: false,
      },
    ]);
    if (props.status === "completed") {
      props.setStatus("all");
    }
    props.setInputText("");
  };

  return (
    <form action="#" className="form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Add details"
        onChange={inputHandler}
        value={props.inputText}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInputForm;
