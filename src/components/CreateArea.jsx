import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;
    setInputText(preValue => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  function expandInput(event) {
    setExpanded(true);
  }

  return (
    <div>
      <form onClick={expandInput} className="create-note">
        {isExpanded ? (
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Title"
            value={inputText.title}
          />
        ) : null}
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Content of Note"
          rows={isExpanded ? "3" : "1"}
          value={inputText.content}
        />

        <Zoom in={isExpanded}>
          <Fab
            onClick={e => {
              props.onAddClick(inputText);
              setInputText({
                title: "",
                content: "",
              });
              e.preventDefault();
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
