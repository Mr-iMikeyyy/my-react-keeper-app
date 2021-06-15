import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import notes from "./notes";

function createNote (noteEntry) {
  return(
  <Note key={noteEntry.id} title={noteEntry.title} content={noteEntry.content} />
  )
}

function App() {
  return (
      <div>
        <Header />
        {notes.map(createNote)}
        <Footer />
      </div>
  );
}

export default App;
