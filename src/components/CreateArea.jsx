import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateArea(props) {
  const [headingText, setHeadingText] = useState("");
  const [bodyText, setBodyText] = useState("");
  return (
    <div>
      <form>
        <input
          value={headingText}
          onChange={(event) => setHeadingText(event.target.value)}
          name="title"
          placeholder="Title"
          autoComplete="off"
        />
        <textarea
          value={bodyText}
          onChange={(event) => setBodyText(event.target.value)}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(e) => {
            const id = uuidv4();
            props.onAdd({
              key: id,
              id: id,
              title: headingText,
              content: bodyText,
            });
            setHeadingText("");
            setBodyText("");
            e.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
