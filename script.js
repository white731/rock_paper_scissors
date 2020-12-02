rock = {
    name:"rock",
    image:"images/rock.png"
}
paper = {
    name:"paper",
    image:"images/paper.png"
}
scissors = {
    name:"scissors",
    image:"images/scissors.png"
}

state = {
    title: "Rock, Paper, Scissors",
    instructions:"This is the classic game of rock paper scissors. To play, click on either rock, paper or scissors and see if you beat the computer!" ,
    options:[rock,paper,scissors],
    winMessage:"You won!",
    loseMessage:"You lost!",
    tieMessage:"It's a tie",
    displayResult:false,
    selected:{},
    userResult:"",
    computerChoice:"",
    userChoice:"",
    computerScore:0,
    userScore:0

}

const reset_score = () => {
    state.computerScore = 0
    state.userScore = 0
    state.displayResult=false
    render();
}

const displayResult = () => {
    console.log("display result working")
    htmlString = `
    <div class = "row">
        <div class = "col s12 outcome">
            <h4>${state.userResult}</h4>
            <div class = "col s6">
                <p>Your choice: ${state.userChoice}</p>
                <img src= "${state.options.find((option) => option.name == state.userChoice).image}">
            </div>    
            <div class = "col s6">
                <p>Computer choice: ${state.computerChoice}</p>
                <img src= "${state.options.find((option) => option.name == state.computerChoice).image}">
            </div>    
            <div class = "col s6">
                <p>Your Score: ${state.userScore}</p>
            </div>
            <div class = "col s6">
                <p>computer Score: ${state.computerScore}</p>
            </div>
            <a onclick="reset_score()" class="waves-effect waves-light btn">Reset</a>
        </div>
    </div>    
           `
    return htmlString
}

const set_result = (userResult, userChoice, computerChoice) =>{
    state.displayResult = true
    state.userResult=userResult
    state.userChoice=userChoice
    state.computerChoice=computerChoice
    if (userResult == "You won!"){
        state.userScore++
    } else if (userResult == "You lost!") {
        state.computerScore++
    }
    render();
}

const randomGenerator = () =>{
    let computerAnswer = state.options[Math.floor(Math.random()*state.options.length)]
    return computerAnswer
}

const playGame = () =>{
    console.log("playGame is working")

    let userChoice = state.selected.name
    let computerChoice = randomGenerator().name
    let rock = state.options[0].name
    let paper = state.options[1].name
    let scissors = state.options[2].name
    let win = state.winMessage
    let lose = state.loseMessage
    let tie = state.tieMessage

    console.log(`Computer Choice: ${computerChoice}`)
    console.log(`Your Choice: ${userChoice}`)

    if (userChoice != computerChoice){
        if (userChoice == rock && computerChoice == paper){
            return set_result(lose,userChoice,computerChoice)
        } else if (userChoice == rock && computerChoice == scissors){
            return set_result(win,userChoice,computerChoice)
        } else if (userChoice == paper && computerChoice == scissors){
            return set_result(lose,userChoice,computerChoice)
        } else if (userChoice == paper && computerChoice == rock){
            return set_result(win,userChoice,computerChoice)
        } else if (userChoice == scissors && computerChoice == rock){
            return set_result(lose,userChoice,computerChoice)
        } else if (userChoice == scissors && computerChoice == paper){
            return set_result(win,userChoice,computerChoice)
        } 
    }   
    return set_result(tie,userChoice,computerChoice)

    }

const set_selected_option = (option) => {
state.selected = option   
playGame()
}

const showGame = () =>{
    console.log("show game success")
    let htmlString = `<div class = "row options">`
    state.options.forEach((option) => {
        htmlString += `
        <div class="${option.name} col s12 m4">
            <img class = "image" onclick="set_selected_option(${option.name})" src="${option.image}">
        </div>`
    });
    htmlString += `</div>`
    return htmlString
}

const render = () => {
let root = document.getElementById("root")
let htmlString = `
    <div>
        <h1>${state.title}</h1>
        <p>${state.instructions}</p>
    <div>`
htmlString += showGame();
if (state.displayResult){
    htmlString += displayResult();
}
root.innerHTML = htmlString
console.log("Render successful")
}

render();
console.log ("Program Starts")