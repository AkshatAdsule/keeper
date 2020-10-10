import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prev) => [...prev, note]);
  }

  function onDelete(id) {
    setNotes((prevState) => prevState.filter((note) => note.id !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note) => (
        <Note
          key={note.key}
          id={note.id}
          title={note.title}
          content={note.content}
          onDelete={onDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
