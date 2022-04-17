let secretWords = ["mohammad" ,"programmer", "God","three","break","work","weather"];

let randomItem = "";
let clicked = [];
let result = "";
let mistake = 0;

function sRandomItem(){
    randomItem = secretWords[Math.floor(Math.random() * secretWords.length)]
    document.getElementById("letters").addEventListener('click', btnHandler)
    console.log(randomItem)
}

function checkIfWon(){
    if(randomItem === result){
        document.getElementById("gameover").querySelector("p").style.display = "block"
        document.getElementById("image").querySelector("img").src = "images/winner.png";
    }
}
function checkIfLose(){
    if(mistake === 6){
        document.getElementById("gameover").querySelector("p").style.display = "block"
    document.getElementById("clue").innerHTML = `<p>random word is ${randomItem}<p>`;

    }
}

function updateImages(){
    let image = document.getElementById("image").querySelector("img");
    image.src = `images/hangman${mistake}.png`
}
function letterHandler(letter){
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
     document.getElementById(letter.toUpperCase()).classList.add("used")
    if(randomItem.indexOf(letter) >= 0){
        sUnderScore()
        checkIfWon();
    }
    if(randomItem.indexOf(letter) === -1){
        mistake++
        updateImages();
        checkIfLose();
    }
    }
    
function sUnderScore(){
    let splitedWord = randomItem.split("")
    let mappedWord = splitedWord.map( letter => (clicked.indexOf(letter) >= 0 ? letter : "_"))
    result = mappedWord.join("");
    document.getElementById("clue").innerHTML =  `<p>${result}<p>`
}
    
    
function btnHandler(event){
    letterHandler(event.target.id)
}






sRandomItem();
sUnderScore()
