//My BlackJack Game



var Player = function(name) {
	this.name = name;
}
	//instantiate two new players: Joel & House
	var player1 = new Player('Joel');
	var player2 = new Player('House');


var bjGame = function() {


	//Four Suits: Hearts, Spades, Clubs, Diamonds
	var cardDeck = [
		'HA', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'HJ', 'HQ', 'HK',
		'SA', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'SJ', 'SQ', 'SK',
		'CA', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'CJ', 'CQ', 'CK',
		'DA', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'DJ', 'DQ', 'DK'
	]

	var shuffleDeck = function() {
		//shuffle array of cards
		var deckLength = cardDeck.length;
		var rndmIndex = Math.Floor(Math.random() * deckLength);

		return cardDeck[rndmIndex];
	}

	var dealDeck = function() {
		//give two cards from array to player 1

	}

	var evaluate = function() {
		//check cards of player 1 & 2 and see what they total
		////maybe put this function inside deal deck above
		//create the logic for what the card values would be
	}

	var check = function() {
		//when player checks, stop dealing to them and lock in their card value
		////or just total the cards they were dealt
	}

	var hit = function() {
		//distribute another card from the cardDeck array.
		//and give them the option to hit as many times as needed

		//have something check to see if they exceed 21
		////or if they reach 21, alert that they won.
	}

	//var gameOver = function() {
		//have something check
	//}

	//OPTIONAL
	var playerScore = function() {
		//keep running total of the number of games they have won.
	}


	return {
		
		shuffleDeck : shuffleDeck
	}
}