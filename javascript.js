function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"]
	let computer = Math.floor(Math.random()*3+1)
	return choices[computer]
}


function lets_play(player_selection, computer_selection) {
	if (player_selection === "rock") {
		if (computer_selection === "paper") {
			console.log("Computer wins!")
		}
		else {
			console.log("Human wins!")
		}
	}
	if (player_selection === "paper") {
		if (computer_selection === "scissors") {
			console.log("Computer wins!")
		}
		else {
			console.log("Human wins!")
		}
	}
	if (player_selection === "scissors") {
		if (computer_selection === "rock") {
			console.log("Computer wins!")
		}
		else {
			console.log("Human wins")
		}
	}
}

function game(){
	for (let i=0; i <=5; i++) {
		let computer_choice = getComputerChoice()
		let ask_player = prompt("Rock, paper or scissors?")
		let playerSelection = ask_player.toLowerCase()
		lets_play(playerSelection, computer_choice)
	}

}

game()

//let computer_choice = getComputerChoice()
//let computer_play = computer_choice.toLowerCase()'
//let playerSelection = prompt("Rock, paper or scissors?")

//lets_play(playerSelection, computer_choice)