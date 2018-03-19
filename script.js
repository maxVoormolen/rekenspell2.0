const wrapper = document.getElementById("wrapper");
const myAssignment = document.getElementById('myAssignment');
const myInput = document.getElementById('myInput');
const result = document.getElementById('result');
let assignments = [];

let counter = 0;
let maxNumber = 10;


console.log("hallo wereld")
myInput.focus();


myInput.addEventListener('keydown',inputHandler,false);

function inputHandler(evt){
  if(evt.keyCode == 13){

    if(counter <maxNumber ){
      assignments[counter].yourAns = myInput.value;
      console.log(assignments[counter])
      counter++;
      myAssignment.innerHTML = assignments[counter].numA + " * " + assignments[counter].numB;
    } else {

      finish();
    }
    myInput.value = "";

  }
}

function makeSum(){
  let sum = {};
  sum.numA = getNumber();
  sum.numB = getNumber();
  sum.ans = eval(sum.numA * sum.numB);
  sum.yourAns = myInput.value;

  return sum;
}

function getNumber(){
  let number = Math.floor(Math.random()*9)+1;
  return number;
}

for (i=0; i < maxNumber; i++){
  assignments.push(makeSum());

}



function finish(){
  console.log('ik ben klaar');
  myAssignment.innerHTML = "";
  myInput.style.display = "none";
  for (var i = 0; i < assignments.length; i++) {
    result.innerHTML += assignments[i].numA + "x" + assignments[i].numB + " = " + assignments[i].ans + " and your awnser was: " + assignments[i].yourAns + "<br>";
  }
}
myAssignment.innerHTML = assignments[counter].numA + " * " + assignments[counter].numB;
