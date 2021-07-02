import "./Tabs.css";

const Tabs = (props) => {
  const tabHandler = (e) => {
    props.setStatus(e.target.id);
  };
  return (
    <ul className="tab-list">
      <li
        className={`tab-list--item ${
          props.status === "all" ? "tab-active" : ""
        }`}
        id="all"
        onClick={tabHandler}>
        All
      </li>
      <li
        className={`tab-list--item ${
          props.status === "active" ? "tab-active" : ""
        }`}
        id="active"
        onClick={tabHandler}>
        Active
      </li>
      <li
        className={`tab-list--item ${
          props.status === "completed" ? "tab-active" : ""
        }`}
        id="completed"
        onClick={tabHandler}>
        Completed
      </li>
    </ul>
  );
};

export default Tabs;
