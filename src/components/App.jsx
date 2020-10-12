import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
const api_url = "https://keeper-backend.azurewebsites.net";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    axios.post(api_url, note).then(() => {
      axios.get(api_url).then((res) => {
        setNotes(res.data);
      });
    });
    setNotes((prev) => [...prev, note]);
  }

  function onDelete(postID) {
    const req = {
      id: postID,
    };
    console.log(req);
    axios.delete(`${api_url}/${postID}`).then(() => {
      axios.get(api_url).then((result) => {
        setNotes(result.data);
      });
    });
  }

  //runs when componenet is created
  useEffect(() => {
    axios.get(api_url).then((res) => {
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
