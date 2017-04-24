$(function() {

//calculator button click-input functionality
  $('#buttons-container').click(function(event) {
    if ((event.target).id === 'equals'){
    var screenTotal = $("#screen").html();
    totalIt(screenTotal);
    subtotalEl1 = 0;
    operatorAtIndex = 0;
    subtotalEl2 = 0;
    nextOperatorIndex = 0;
    subtotal = 0;
  } else if ((event.target).id === "clear"){
    $("#screen").html("");
    console.log('calculator cleared');
    subtotalEl1 = 0;
    operatorAtIndex = 0;
    subtotalEl2 = 0;
    nextOperatorIndex = 0;
    subtotal = 0;
    } else {
      $("#screen").append((event.target).innerHTML);
      console.log((event.target).innerHTML);
    }
  });

//calculating functionality
var subtotalEl1 = 0;
var operatorAtIndex = 0;
var subtotalEl2 = 0;
var nextOperatorIndex = 0;
var subtotal = 0;

function valueIsNaN(v) { return v !== v; }

function totalIt(string){
  subtotal = string;
  console.log('OG string: ' + string);
  for (let i=0; i<string.length; i++){
    console.log("i: " + [i]);
    console.log(parseInt((string[i]).valueOf(), 10));
    console.log(valueIsNaN((string[i]).valueOf()));
    if (valueIsNaN(parseInt((string[i]).valueOf(), 10)) === false && i<=operatorAtIndex){
      subtotalEl1 += string[i];
      operatorAtIndex = [i];
      console.log('if subtotal1');
    } else if (valueIsNaN(parseInt((string[i]).valueOf(), 10)) === false && i>operatorAtIndex){
      subtotalEl2 += string[i];
      nextOperatorIndex = [i+1];
      console.log('else if subtotal2');
    } else if (valueIsNaN(parseInt((string[i]).valueOf(), 10)) && nextOperatorIndex<string.length){
      operatorAtIndex = [i];
      console.log('else if nextOp');
      // operatorFunction();
    } else {
      operatorAtIndex = [i];
      console.log('else oneOp');
    }
  console.log('subtotalEl1:' + subtotalEl1);
  console.log('subtotalEl2:' + subtotalEl2);
  console.log('operatorIndex:' + operatorAtIndex);
  console.log('nextOperatorIndex:' + nextOperatorIndex);
  console.log(subtotal);
}//closes subtotalElements for-loop

  switch (string[operatorAtIndex]) {
    case '÷':
    // subtotal = subtotalEl1 / subtotalEl2;
    subtotal = string.replace((string.slice(0,nextOperatorIndex)), (subtotalEl1 / subtotalEl2));
    console.log('division subtotal: ' + subtotal);
    subtotalEl1 = 0;
    subtotalEl2 = 0;
      break;
    case 'x':
    // subtotal = subtotalEl1 * subtotalEl2;
    subtotal = string.replace((string.slice(0,nextOperatorIndex)), (subtotalEl1 * subtotalEl2));
    console.log('multiplication subtotal: ' + subtotal);
    subtotalEl1 = 0;
    subtotalEl2 = 0;
      break;
    case '-':
    // subtotal = subtotalEl1 - subtotalEl2;
    console.log('subtraction');
    subtotal = string.replace((string.slice(0,nextOperatorIndex)), (subtotalEl1 - subtotalEl2));
    console.log('subtraction subtotal: ' + subtotal);
    subtotalEl1 = 0;
    subtotalEl2 = 0;
      break;
    default:
    // subtotal = parseInt(subtotalEl1, 10) + parseInt(subtotalEl2, 10);
    console.log('addition');
    subtotal = string.replace((string.slice(0,nextOperatorIndex)), (parseInt(subtotalEl1, 10) + parseInt(subtotalEl2, 10)));
    console.log('addition subtotal: ' + subtotal);
    subtotalEl1 = 0;
    subtotalEl2 = 0;

  if ((subtotal.includes('÷')) || (subtotal.includes('x')) || (subtotal.includes('-')) || (subtotal.includes('+'))){
    subtotal = string.replace((string.slice(0,nextOperatorIndex)), subtotal);
    $("#screen").append("= " + subtotal);
    totalIt(subtotal);
  } $("#screen").append("= " + subtotal);
  return subtotal;
  }// closes operator reloop
}//closes totalIt



  //   for (let i=0; i<operatorIndexStart; i++){
  //     subtotalEl1 += string[i];
  //   }
  //   for (let i=operatorIndexStart+1; i<operatorIndexEnd; i++){
  //     subtotalEl2 += string[i];
  //   }
  //   finalTotal = 7;
  // }


  // function totalIt(string){
  //
  //     for (let i=0; i<operatorStorage.length; i++){
  //       if (operatorStorage.includes("x") || operatorStorage.includes("÷")){
  //         console.log("multiply or divide!");
  //         console.log(string[1]);
  //         let multiplyIndex = string.indexOf("x");
  //         let divideIndex = string.indexOf("÷");
  //         let addIndex = string.indexOf("+");
  //         let subtractIndex = string.indexOf("-");
  //         // let operatorIndex = one of the above
  //       } else {
  //         console.log("add or subtract");
  //         let addIndex = string.indexOf("+");
  //         let subtractIndex = string.indexOf("-");
  //       }
  //       // let firstOperatorIndex = string.indexOf(operatorStorage[i]);
  //       // let nextOperatorIndex = string.indexOf(operatorStorage[i+1]);
  //       // let firstNumber = string.slice(0, firstOperatorIndex);
  //       // let nextNumber = string.slice(firstOperatorIndex+1, nextOperatorIndex);
  //     } // closes for loop
  //     // return firstNumber + operatorStorage[0] + lastNumber;
  //   } //closes totalIt
});//closes JS
