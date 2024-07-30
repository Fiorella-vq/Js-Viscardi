let who = ["A two-headed pinecone", "A lonely jogger", "A lonely comedian"];
let action = ["yelled at", "kicked", "burned"];
let what = ["my sandwich", "my sandwich", "my car"];
let when = ["in my house", "on the street", "in front of the office"];

function generateExcuse() {
  let randomIndex = Math.floor(Math.random() * who.length);
  let randomWho = who[randomIndex];
  let randomAction = action[randomIndex];
  let randomWhat = what[randomIndex];
  let randomWhen = when[randomIndex];

  return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}
function displayExcuse() {
  let excuseElement = document.getElementById("excuse");
  excuseElement.innerHTML = generateExcuse();
}

window.onload = displayExcuse;
