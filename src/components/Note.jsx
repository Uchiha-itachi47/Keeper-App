import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    <DeleteIcon onClick={() => {
          props.noteDelete(props.id);
        }}/>
    </div>
  );
}

export default Note;