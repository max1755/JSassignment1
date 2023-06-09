// Assignment 1 | COMP1073 Client-Side JavaScript
//MAX MARTENS 200495725
//KIEREN
/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
const synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
// Buttons
const speakButton = document.getElementById('speakButton');
const subjectButton = document.getElementById('subject');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const nounButton = document.getElementById('noun');
const settingsButton = document.getElementById('places');
const randomButton = document.getElementById('random');
//Story preview
const currentStory = document.getElementById('currentStory');
// Variables for story
let textToSpeak = "";
let speakArray = ['The turkey', 'sat on', 'a funny', 'goat', 'on the moon'];

currentStory.textContent = speakArray.join(' '); // Preview

// Array to store the different words //

/*	Subjects
	Verbs
	Adjectives
	Nouns
	Places
*/

const words = [['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'],
			  ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'],
			  ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'],
			  ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'],
			  ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'in the grass', 'in my shoes']
			  ];

//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/*	The functions for choosing different words	*/

function chooseWord(i, array, checkArray) {
	let newString = "";
	do{
		let element = Math.floor(Math.random() * array.length); //Random number is chosen, 1 - 5
		newString = array[i][element]; //element for the story is chosen
		console.log(checkArray.includes(newString));
		console.log(newString);
	}while(checkArray.includes(newString));//makes sure it's a new element
	return newString; //element is returned to be used in story
}

function updatePreview(){
	currentStory.textContent = speakArray.join(' '); //Updates preview with new word
}

//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//	//

/* Event Listeners
-------------------------------------------------- */
// Event handler for subject selection

subjectButton.addEventListener('click', function (){
	let newString = chooseWord(0, words, speakArray); //passes in the index for which part of array to access
	speakArray.splice(0, 1, newString); //new element is added to the story
	updatePreview(); // preview is updated
	speakNow(newString); //element is read aloud for user
})

// Verb selection

verbButton.addEventListener('click', function (){
	let newString = chooseWord(1, words, speakArray);
	speakArray.splice(1, 1, newString);
	updatePreview();
	speakNow(newString); 
})

//Adjective Selection

adjectiveButton.addEventListener('click', function (){
	let newString = chooseWord(2, words, speakArray);
	speakArray.splice(2, 1, newString);
	updatePreview();
	speakNow(newString); 
})

//Noun Selection

nounButton.addEventListener('click', function (){
	let newString = chooseWord(3, words, speakArray);
	speakArray.splice(3, 1, newString);
	updatePreview();
	speakNow(newString); 
})

//Settings Selection

settingsButton.addEventListener('click', function (){
	let newString = chooseWord(4, words, speakArray);
	speakArray.splice(4, 1, newString);
	updatePreview();
	speakNow(newString); 
})

// The click event handler for the button that speaks the text contained in the above var textToSpeak
speakButton.addEventListener('click', function () {
	textToSpeak = speakArray.toString();
	speakNow(textToSpeak);
})

//Random generated sentence
randomButton.addEventListener('click', function(){
	for  (i = 0; i <= 4; i++){
		let newString = chooseWord(i, words, speakArray); //Just needs to call this five times
		speakArray.splice(i, 1, newString);
	}
	updatePreview();
	textToSpeak = speakArray.toString();
	speakNow(textToSpeak);
});
