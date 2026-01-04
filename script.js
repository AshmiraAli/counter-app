let count = 0;
let countE1 = document.getElementById("count-pl")

console.log(countE1);

function increment() {
    console.log("The button is clicked");
    count += 1 ;
    countE1.innerText = count;
    console.log(count);
    
}
function save(){
    let text = document.getElementById("para");
    let countStr = count + " - ";
    //text.innerText += countStr;         we didn't get equal space 
    text.textContent += countStr; // textContent help with it.
    console.log(count);
    // to make the count as 0 when click the save button. 
    countE1.innerHTML = 0;
    count = 0;
}



