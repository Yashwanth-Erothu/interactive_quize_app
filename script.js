// Questions that will be asked
const Questions = [{
	q: "What is capital of India?",
	a: [{ text: "Gandhinagar", isCorrect: false },
	{ text: "Surat", isCorrect: false },
	{ text: "Delhi", isCorrect: true },
	{ text: "Mumbai", isCorrect: false }
	]

},
{
	q: "What is the tallest mountain in the world?",
	a: [{ text: "Mount Fuzi", isCorrect: false },
	{ text: "Mount Everest", isCorrect: true },
	{ text: "Mount Kilimanjaro", isCorrect: false },
	{ text: "Kangchenjunga", isCorrect: false }
	]

},
{
	q: "What is the largest planet in our solar system?",
	a: [{ text: "Neptune", isCorrect: false },
	{ text: "Mars", isCorrect: false },
	{ text: "Jupiter", isCorrect: true },
	{ text: "Sun", isCorrect: false }
	]

},
{
	q: "What is the largest species of shark?",
	a: [{ text: "Great White Shark", isCorrect: false },
		{ text: "Whale Shark", isCorrect: true },
		{ text: "Blue Shark", isCorrect: false },
		{ text: "Grey Shark", isCorrect: false }
	]
},
{
	q: "Which country won the FIFA World Cup in 2018?",
	a: [{ text: "France", isCorrect: true },
		{ text: "Brazil", isCorrect: false },
		{ text: "Australia", isCorrect: false },
		{ text: "India", isCorrect: false }
		]
},
{
	q: "What is the chemical symbol for gold?",
	a: [{ text: "Cu", isCorrect: false },
		{ text: "Au", isCorrect: true },
		{ text: "Ag", isCorrect: false },
		{ text: "Fe", isCorret: false }
	]
},
{
	q: "Who painted the Mona Lisa?",
	a: [{ text: "Pablo Picasso", isCorrect: false },
		{ text: "Michelangelo", isCorrect: false },
		{ text: "Vincent van Gogh", isCorrect: false },
		{ text: "Leonardo da Vinci", isCorrect: true }
		]
},
{
	q: "Which is the largest ocean on Earth?",
	a: [{ text: "Indian Ocean", isCorrect: false },
		{ text: "Pacific Ocean", isCorrect: true },
		{ text: "Arctic Ocean", isCorrect: false },
		{ text: "Atlantic Ocean", isCorrect: false }
		]
},
{
	q: "What is the captial of France?",
	a: [{ text: "Paris", isCorrect: true },
		{ text: "Brazil", isCorrect: false },
		{ text: "Australia", isCorrect: false },
		{ text: "India", isCorrect: false }
		]
},
{
	q: "Which planet is known as the Red Planet?",
	a: [{ text: "Mars", isCorrect: true },
		{ text: "Saturn", isCorrect: false },
		{ text: "Venus", isCorrect: false },
		{ text: "Mercury", isCorrect: false }
		]
}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
