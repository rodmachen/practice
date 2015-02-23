// Create iHeartOneHitWonders, a program to add, collect and sort one hit wonders by year.
// -create the song object with artist and year properties
// -add it to an array of songs
// -keep array sorted by years
// -possibly play YouTube video of the song
// -print console.table of the results
// -possible hits: 99 Luft Baloons, Rock Me Amadeus, 

// Hits: 
// Thomas Dolby: “She Blinded Me With Science”
// Nena: “99 Luft Balloons”
// Eddy Grant: “Electric Avenue”
// Edie Brickell & New Bohemians: “What I Am”
// Neneh Cherry “Buffalo Stance”
// Chris DeBurgh “Lady in Red”
// Nu Shooz “I Can’t Wait”
// Michael Damian: “Rock On”
// Soft Cell: “Tainted Love”
// Frankie Goes to Hollywood: “Relax”

// creates one scope and a single global variable using an IIFE
var iHeartOneHitWonders = (function() {

var oneHitters = [];

function oneHitWonderCreator(song, artist, year) {
	return {
		song: song,
		artist: artist,
		year: year
	};
}

function oneHitListCreator(song, artist, year) {
	oneHitters.push(oneHitWonderCreator(song, artist, year));
	// oneHitters.sort();
	showHits();
}

function showHits() {
	console.table(oneHitters);
}

}());
