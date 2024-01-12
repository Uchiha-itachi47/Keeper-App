import React from "react";
import AddIcon from "@mui/icons-material/Add";


function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={props.noteWrite}
          value={props.inputTitle.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={props.noteWrite}
          value={props.inputTitle.content}
        />
        <button onClick={props.noteAdd} className="mdc-fab">
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
