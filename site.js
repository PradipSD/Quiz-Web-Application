
let questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "How can we change the background color of an element?",
    answer: "background-color",
    options: [
      "background-color",
      "color",
      "Both A and B",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "A page designed in HTML is called _____",
    answer: "Web Page",
    options: [
      "Application",
      "Cover Page",
      "Front-End",
      "Web Page"
    ]
  },
  {
    id: 5,
    question: " Choose the correct HTML tag for a large title.",
    answer: "H1",
    options: [
      "H1",
      "Heading",
      "Head",
      "H6"
    ]
  },
  {
    id: 6,
    question: "An HTML document is saved with the ____ extension.",
    answer: ".html",
    options: [
      ".htm",
      ".html",
      ".htl",
      ".htln"
    ]
  },
  {
    id: 7,
    question: "Javascript is an _______ language?",
    answer: "Object Oriented",
    options: [
      "Object Oriented",
      "Object Based",
      "Procedual",
      "None of these"
    ]
  },
  {
    id: 8,
    question: "Which of the following keywords is used to define a variable in Javascript?",
    answer: "Both A and B",
    options: [
      "var",
      "let",
      "Both A and B",
      "None of these"
    ]
  },
  {
    id: 9,
    question: "Which of the following methods is used to access HTML elements using Javascript?",
    answer: "BOth A and B",
    options: [
      "getElementById()",
      "getElementByClassName()",
      "Both A and B",
      "None of these"
    ]
  },
  {
    id: 10,
    question: "The full form of CSS is:     ",
    answer: "Cascading Style Sheets",
    options: [
      "Cascading Style Sheets",
      "Coloured Special Sheets",
      "Color and Style Sheet",
      "None of these"
    ]
  }
];

let question_count = 0;
let points = 10;

window.onload = function () {
  show(question_count);

};

function next() {

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
    // document.getElementById('btn-next').innerHTML='Submit';
  }
  if (question_count == questions.length - 2) {

    document.getElementById('btn-next').innerHTML = 'Submit';
  }

  console.log(question_count);


  // let user_answer = document.querySelector("li.option.active").innerHTML;
  // // check if the answer is right or wrong
  // if (user_answer == questions[question_count].answer) {
  //   points += 10;
  //   sessionStorage.setItem("points", points);
  // }
  // console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}


let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time");
document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
// document.querySelector("span.time_taken").innerHTML = user_time%60;



// function checkAnswers(){
//   var Qlen=questions.length;
//   // for(i=0;i<Qlen;i++){
//   //   document.getElementById('demo').innerHTML=questions.answer[0];
//   // }
//   // document.getElementById("demo").innerHTML = questions[question_count].answer;
//   var alen=questions[question_count].answer;
//     for(i=0;i<questions[3];i++){
//       document.getElementById("demo").innerHTML = questions[question_count].answer;
//     }
// }


// console.log(user_answer)
// for(var i = 0; i<questions.length ; i++){
//   console.log(questions[question_count].answer[i])
// }

function checkAnswers() {
  document.getElementById('answerscontainer').style.display = "flex";
}