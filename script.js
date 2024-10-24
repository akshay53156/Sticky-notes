let button = document.getElementById("button");
let textArea = document.getElementById("note-input");
let container = document.querySelector(".container");
let color = document.getElementById("color");
let noNotes = document.getElementById("noNotes");

button.addEventListener("click", createNote);

function createNote(){
    
    if( textArea.value === ""){
        alert("Enter some Text");
        return;
    }
    let notesContainer = document.createElement("div");
    notesContainer.classList.add("notesContainer");
    let p = document.createElement("p");
    p.classList.add("para");
    let btn = document.createElement("button");
    btn.classList.add("crossBtn");

    notesContainer.appendChild(p);
    notesContainer.appendChild(btn);
    notesContainer.style.backgroundColor = color.value;
    p.innerText = textArea.value;
    btn.innerText = "X";   

    container.appendChild(notesContainer);

    noNotes.style.display = "none";

    btn.addEventListener("click", () => {
        notesContainer.remove();
        let notesSet = document.querySelectorAll(".notesContainer");
        if(notesSet.length === 0){
            noNotes.style.display = "block";
        }
    });

    textArea.value = "";
};



