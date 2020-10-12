import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    axios.post("https://keeper-backend.azurewebsites.net", note).then(() =>
      axios.get("https://keeper-backend.azurewebsites.net").then((res) => {
        console.log(res);
        setNotes(res.data);
      })
    );
    setNotes((prev) => [...prev, note]);
  }

  function onDelete(id) {
    setNotes((prevState) => prevState.filter((note) => note.id !== id));
  }

  //runs when componenet is created
  useEffect(() => {
    axios.get("https://keeper-backend.azurewebsites.net").then((res) => {
      console.log(res);
      setNotes(res.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note) => (
        <Note
          key={note._id}
          id={note._id}
          title={note.title}
          content={note.body}
          onDelete={onDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
