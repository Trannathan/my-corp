// let user = prompt("choose: rock, paper, or scissors...");
let user;

function userChoice(choice) {
    user = choice;
    compare();
}

function cpuChoice(){
let choices = ["rock", "paper", "scissors"];

let randnum = Math.floor(Math.random() * 3);

let cpu = choices[randnum];
}

function drawImg(pic, width, height, alt, id){
    var x = document.createElement("IMG");
    x.setAttribute("src", pic);
    x.setAttribute("width", width);
    x.setAttribute("height", height);
    x.setAttribute("alt", alt);
    document.body.appendChild(x);
    document.getElementById(id).appendChild(x);
}

// console.log("the user choice is " + user);
console.log("the randnum is " + randnum);
console.log("the computer choice is " + cpu);

function compare(){
    let cpu = cpuChoice();
    if (user = "rock"){
        drawImg("_images/rock.jpg", "100", "100", "rock") 
    }
    if (user = "paper"){
        drawImg("_images/rock.jpg", "100", "100", "paper") 
    }
    if (user = "scissors"){
        drawImg("_images/rock.jpg", "100", "100", "scissors") 
    }
}
    if (user == "rock" && cpu == "scissors" ||
        user == "paper" && cpu == "rock" ||
        user == "scissors" && cpu == "paper") {
        console.log("user wins the game...");
    }
    else if (cpu == "rock" && user == "scissors" ||
        cpu == "paper" && user == "rock" ||
        cpu == "scissors" && user == "paper") {
        console.log("user loses the game...");
    }
    else if (cpu == user){
        console.log("tie game...");
    }
    else {
        console.log("something went wrong");
    }







// function diceRoll(sides){
//     let numsides = parseInt(sides);
//     let outcome = Math.floor(Math.random()*numsides);
//     alert("Your " + sides + " sided die rolled a " + outcome);
// }

// function getInputValue() {
//     // Selecting the input element and get its value 
//     let inputVal = document.getElementById("inputId").value;
//     // Displaying the value
//     alert(inputVal);
// }