import React from "react";

const Paragraph = (props) => {
  return (
    <div>
      {props.answers.map((item) => (
        <p>{item.task}</p>
      ))}
      <input type="text" onChange={(e) => props.inputTodo(e)} />
      <button onClick={props.btnAdd}>add</button>
    </div>
  );
};

export default Paragraph;
