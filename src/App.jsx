import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";



function App() {

  const [noteArray, setNoteArray] = useState([]);

// function createNote (noteEntry) {
//   return(
//   <Note key={noteEntry.id} title={noteEntry.title} content={noteEntry.content} />
//   )
// }

function addNewNote (note) {
  setNoteArray(prevValue => {
    return [...prevValue, note]
  })
}

function handleDelete (id) {
  setNoteArray(prevNotes => {
    return noteArray.filter( (noteItem, index) => {
      return index !== id;
    })
  })
}

  return (
      <div>
        <Header />
        <CreateArea addNewNote={addNewNote}/>
        {noteArray.map((noteItem, index) => {
          return <Note
            key= {index}
            id= {index} 
            title= {noteItem.title}
            content= {noteItem.content}
            deleteNote={handleDelete}
          />
        })}
        <Footer />
      </div>
  );
}

export default App;
