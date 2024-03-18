import React, { useState } from "react";
import "./Todo.css";


const Todo = () => {
  const [task, setTask] = useState([]);
  const [value, setValue] = useState("");
  const [index, setIndex] = useState(0);
  const [edit, setEdit] = useState(false);

  const handleClick = () => {
    if (value == "") {
      alert("Enter a value");
    } else {
      task.push(value);
      setValue("");
    }
  };
  const Delete = (index) => {
    const del = task.filter((data, ind) => {
      if (ind !== index) {
        return data;
      }
    });
    setTask(del);
  };

  const Edit = (data, index) => {
    setIndex(index);
    setValue(data);
    setEdit(true);
  };

  const editConform = () => {
    task[index] = value;
    setValue("");
    setEdit(false);
  };
  return (
    <>
      <div className="todo-container">
        <div className="header">TODO APP</div>
        <div className="add-task">
          <div className="input-container">
            <input
              type="text"
              className="input"
              placeholder="Add a new Task"
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
            />

            {edit ? (
              <button className="button" onClick={editConform}>
                Edit
              </button>
            ) : (
              <button className="button" onClick={handleClick}>
                ADD
              </button>
            )}
          </div>
        </div>
        <div className="tasks-container">
        {task.map((data, index) => {
          return (
            <div className="tasks">
              <div className="list-task">{data}</div>
              <div className="btn">
                <button
                  className="delete"
                  onClick={() => {
                    Delete(index);
                  }}
                >
                  Delete
                </button>

                <button className="delete" onClick={() => Edit(data, index)}>
                  Edit
                </button>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
};



export default Todo