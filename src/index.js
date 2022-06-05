import React from "react";
import ReactDOM  from "react-dom";
// import("./index.css");

document.getElementById("save").addEventListener("click",saveNote);
function saveNote(){
    let noteText = document.getElementById("input").value;
    document.getElementById("input").value = "";
    console.log(noteText);

    const root = ReactDOM.createRoot(document.getElementById("savedNote"));
    root.render(
        <div class="notes">
                <h1>Note</h1>
                <div>
                    {noteText}
                </div>
            </div>
    );
}

