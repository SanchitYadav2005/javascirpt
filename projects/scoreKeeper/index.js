const team1 = {
    score: 0,
    button: document.querySelector("#team1Score"),
    display: document.querySelector("#team1Display")
}

const team2 = {
    score: 0,
    button: document.querySelector("#team2Score"),
    display: document.querySelector("#team2Display")
}
const resetButton = document.querySelector("#reset-game");
const winningScore = 21; // it's definate.
let isGameOver = false


function addWinnerLoserForTeamOne(){
    team1.display.classList.add("winner")
    team2.display.classList.add("loser")
}                                        // added these just for fun and some learning.
function addWinnerLoserForTeamTwo(){
    team2.display.classList.add("winner")
    team1.display.classList.add("loser")
}


function removeClassList(){
    team1.display.classList.remove("winner", "loser");
    team2.display.classList.remove("winner", "loser");
}

team1.button.addEventListener("click", function(){
    if (!isGameOver) {
        team1.score += 1;
        if (team1.score === winningScore) {
            isGameOver = true
            addWinnerLoserForTeamOne();
            team1.button.disabled = true
            team2.button.disabled = true
        }
        team1.display.textContent = team1.score;
    }
})

team2.button.addEventListener("click", function(){
    if (!isGameOver) {
        team2.score += 1;
        if (team2.score === winningScore) {
            isGameOver = true
            addWinnerLoserForTeamTwo();
            team1.button.disabled = true
            team2.button.disabled = true
        }
        team2.display.textContent = team2.score;
    }
})

resetButton.addEventListener("click",reset)

function reset(){
    team1.score = 0;
    team1.display.textContent = 0;
    team2.score = 0;
    team2.display.textContent = 0;
    isGameOver = false
    removeClassList();
    team1.button.disabled = false
    team2.button.disabled = false
}