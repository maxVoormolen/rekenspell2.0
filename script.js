const wrapper = document.getElementById("wrapper");
const myAssignment = document.getElementById('myAssignment');
const myInput = document.getElementById('myInput');
const result = document.getElementById('result');
let assignments = [];

let counter = 0;



myAssignment.innerHTML = "en nu staat er wat anders"

myInput.addEventListener('keydown',inputHandler,false);

function inputHandler(evt){
  if(evt.keyCode == 13){
    assignments[counter].yourAns = myInput.value;
    console.log(assignments[counter]);
    counter++;
    myAssignment.innerHTML= assignments[counter].numA + " * " + assignments[counter].numB;
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

for (i=0; i < 10; i++){
  assignments.push(makeSum());

}
myAssignment.innerHTML= assignments[counter].numA + " * " + assignments[counter].numB;
if (counter == 11){
  myInput.type="hidden"; // dit werkt niet
  result.innerHTML =
  "opdr 1: " + assignments[0].numA + " * " + assignments[0].numB + "| your awnser was : " + assignments[0].yourAns + "the corect awnser was: " + assignments[0].ans   break // deze breaks werken  ook niet ;c
  "opdr 2: " + assignments[1].numA + " * " + assignments[1].numB + "| your awnser was : " + assignments[1].yourAns + "the corect awnser was: " + assignments[1].ans   break
  "opdr 3: " + assignments[2].numA + " * " + assignments[2].numB + "| your awnser was : " + assignments[2].yourAns + "the corect awnser was: " + assignments[2].ans   break
  "opdr 4: " + assignments[3].numA + " * " + assignments[3].numB + "| your awnser was : " + assignments[3].yourAns + "the corect awnser was: " + assignments[3].ans   break
  "opdr 5: " + assignments[4].numA + " * " + assignments[4].numB + "| your awnser was : " + assignments[4].yourAns + "the corect awnser was: " + assignments[4].ans   break
  "opdr 6: " + assignments[5].numA + " * " + assignments[5].numB + "| your awnser was : " + assignments[5].yourAns + "the corect awnser was: " + assignments[5].ans   break
  "opdr 7: " + assignments[6].numA + " * " + assignments[6].numB + "| your awnser was : " + assignments[6].yourAns + "the corect awnser was: " + assignments[6].ans   break
  "opdr 8: " + assignments[7].numA + " * " + assignments[7].numB + "| your awnser was : " + assignments[7].yourAns + "the corect awnser was: " + assignments[7].ans   break
  "opdr 9: " + assignments[8].numA + " * " + assignments[8].numB + "| your awnser was : " + assignments[8].yourAns + "the corect awnser was: " + assignments[8].ans   break
  "opdr 10: " + assignments[9].numA + " * " + assignments[9].numB + "| your awnser was : " + assignments[9].yourAns + "the corect awnser was: " + assignments[9].ans   break;
}
