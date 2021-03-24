import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
import LoadingOverlay from "react-loading-overlay";

const api_url = "https://keeper-rs.herokuapp.com"

function App() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  function addNote(note) {
    setLoading(true);
    axios.post(api_url, note).then(() => {
      axios.get(api_url).then((res) => {
        setNotes(res.data);
        setLoading(false);
      });
    });
    // setNotes((prev) => [...prev, note]);
  }

  function onDelete(id) {
    setLoading(true);
    axios.delete(`${api_url}/${id}`).then(() => {
      setNotes((prev) => prev.filter((note) => note._id.$oid !== id));
      setLoading(false);
    });
  }

  useEffect(() => {
    axios.get(api_url).then((res) => {
      setNotes(res.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <LoadingOverlay
        active={loading}
        spinner
        text="Loading..."
        styles={{
          overlay: (base) => ({
            ...base,
            background: "rgba(40, 40, 40, 0.7)",
          }),
        }}
      >
        {notes.map((note) => (
          <Note
            key={note._id.$oid || note._id}
            id={note._id}
            title={note.title}
            content={note.body}
            onDelete={onDelete}
          />
        ))}
      </LoadingOverlay>
      <Footer />
    </div>
  );
}

export default App;
