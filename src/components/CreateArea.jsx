import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNewNote] = useState({
        title: "",
        content: "",
    });

    function handleChange (event) {
        const {name, value} = event.target;
        setNewNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function handleAddClick (event) {
        event.preventDefault();
        if (note.title !== "" && note.content !== "") {
            props.addNewNote(note);
            setNewNote({title: "", content: ""})
        }
    }

    function preventFormDefault (event) {
        event.preventDefault();
    }

  return (
    <div>
      <form onClick={preventFormDefault}>
        <input name="title" placeholder="Title" value={note.title} onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={note.content}/>
        <button onClick={handleAddClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;