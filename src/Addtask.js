import { useState } from "react";

function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <div>
      <label>Title</label>
      <br></br>
      <input type="text" placeholder="Create Title" id="title"></input>
      <br></br>
      <label>Create Content</label>
      <br></br>
      <textarea
        rows="10"
        cols="30"
        placeholder="Enter the content"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br></br>
      <button
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTask;
