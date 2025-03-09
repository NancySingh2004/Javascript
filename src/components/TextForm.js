import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    setText(text.toUpperCase()); 
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    setText(text.toLowerCase()); 
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleClearClick = () => {
    console.log("Clear Text");
    setText(''); 
    props.showAlert("Text cleared!", "success");
  }

  const handleCopy = () => {
    console.log("I am copy");
    navigator.clipboard.writeText(text);  // Copy the text state directly
    props.showAlert("Text copied to clipboard!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value); 
  }

  const [text, setText] = useState('Enter text here');

  return (
    <>
      <div className="container" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">Example textarea</label>
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white', color:props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((word) => word.length > 0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((word) => word.length > 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
