import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [headingText, setHeadingText] = useState("");
  const [bodyText, setBodyText] = useState("");
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <form className="create-note">
        {enabled && (
          <input
            value={headingText}
            onChange={(event) => setHeadingText(event.target.value)}
            name="title"
            placeholder="Title"
            autoComplete="off"
          />
        )}
        <textarea
          value={bodyText}
          onChange={(event) => setBodyText(event.target.value)}
          onClick={() => setEnabled(true)}
          name="content"
          placeholder="Take a note..."
          rows={enabled ? 3 : 1}
        />
        {enabled && (
          <Zoom in="true">
            <Fab
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
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
