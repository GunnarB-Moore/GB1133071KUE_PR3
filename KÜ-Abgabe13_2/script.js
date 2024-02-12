// Wählt Daten vom den vergebenen "id" im HTML
const inputBox = document.getElementById("input-box");
const dateInput = document.getElementById("date-input");
const listContainer = document.getElementById("list-container");

//Funktion zum Hinzufügen der neuen To-Do
function addTask(){
    if(inputBox.value ===''){
        //Warnmeldung, wenn keine Eingabe erfolgt ist (Einblendung vom Browser)
    alert("Du musst was schreiben!!!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value + " - " + dateInput.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    dateInput.value = "";
    saveData();
}
//"Click" auf Speichern-Button löst Funktion aus; ein aus dem w3schools gezeigtes Toole für die toggle unchecked/checked funktioniert leider nicht
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }   
}, false);
// Komplex aus den unteren Fkt speichert die Dateien, wenn die website verlassen wird und zeigt sie wieder an
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}