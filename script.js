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
}


const showGame = () =>{
    console.log("show game success")
    let htmlString = `<div class = "row options">`
    state.options.forEach((option) => {
        htmlString += `
        <div class="${option.name} col s12 m4">
            <img src="${option.image}">
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
root.innerHTML = htmlString
console.log("Render successful")
}

render();
console.log ("Program Starts")