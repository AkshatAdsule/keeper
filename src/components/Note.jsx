import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.onDelete(props.id.$oid)}>
        <DeleteOutlineIcon />
      </button>
    </div>
  );
}

export default Note;
