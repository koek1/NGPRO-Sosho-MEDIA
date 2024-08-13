import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css"; 

function MakePost() {
  const [fileName, setFileName] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="make-post-container">
      <h2 className="make-post-header">Make Post</h2>
      <div className="file-input">
        <label>Select Picture:</label>
        <input type="file" onChange={handleFileChange} />
        {fileName && <p>{fileName}</p>}
      </div>
      <div className="preview">
        {previewUrl && (
          <img src={previewUrl} alt="Preview" className="preview-image" />
        )}
        <p>Ethan Smith</p>
      </div>
      <div className="post-options">
        <button className="post-button confirm-button">✔</button>
        <button className="post-button cancel-button">✖</button>
      </div>
    </div>
  );
}

ReactDOM.render(<MakePost />, document.getElementById("root"));

