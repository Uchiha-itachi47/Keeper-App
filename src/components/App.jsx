import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [titleInput, setTitle] = useState({
    title: "",
    content: "",
  });
  const [note_Whole, setNote] = useState([]);

  function writeNote(event) {
    const { name, value } = event.target;
    setTitle((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function addNote(event) {
    setNote((prevItems) => {
      return [...prevItems, titleInput];
    });
    setTitle({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function deleteNote(id) {
    setNote((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        inputTitle={titleInput}
        noteWrite={writeNote}
        noteAdd={addNote}
      />
      {note_Whole.map((item, index) => {
        return (
          <Note
            key={index}
            title={item.title}
            content={item.content}
            id={index}
            noteDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
