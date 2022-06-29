//initalize the count as 0. 
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el");
let count = 0;

function increment () {
    count += 1;
    countEl.textContent = count;
}

let saveEl = document.getElementById("save-el");


function save(){
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

