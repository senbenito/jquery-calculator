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
  var operandCounter = 0;

  function valueIsNaN(v) { return v !== v; }

  function countOperands(string){
    operandCounter = 0;
    for (let i=0; i<string.length; i++){
      if (valueIsNaN(parseInt((string[i]).valueOf(), 10))){
        operandCounter += 1;
      } //closes if
    }//closes for
  }//closes countOperands

  function totalIt(string){
    if ((!string.includes('÷')) && (!string.includes('x')) && (!string.includes('-')) && (!string.includes('+'))){
      $("#screen").html('Error');
    } else if (string[string.indexOf('÷')+1] === '0'){
      $("#screen").html('Error');
    } else {
    countOperands(string);
    // subtotal = string;
    nextOperatorIndex = string.length;
    console.log('OG string: ' + string);
    for (let i=0; i<string.length; i++){
      console.log("i: " + [i]);
      console.log(parseInt((string[i]).valueOf(), 10));
      console.log(valueIsNaN(parseInt((string[i]).valueOf(), 10)));

      if ((valueIsNaN(parseInt((string[i]).valueOf(), 10)) && (operatorAtIndex === 0))){
        operatorAtIndex = i;
        console.log('operatorAtIndex: ' + operatorAtIndex);
      } else if ((valueIsNaN(parseInt((string[i]).valueOf(), 10)) && (operatorAtIndex !== 0))){
        nextOperatorIndex = i;
        console.log('nextOperatorIndex: ' + nextOperatorIndex);
        doMath();
        // subtotal = string.replace((string.slice(0,nextOperatorIndex)), subtotal);
        $("#screen").html(subtotal);
        totalIt(subtotal);
      } else if (valueIsNaN(parseInt((string[i]).valueOf(), 10)) === false && i<=operatorAtIndex){
        subtotalEl1 += string[i];
        console.log('subtotalEl1: ' + subtotalEl1);
      } else if (valueIsNaN(parseInt((string[i]).valueOf(), 10)) === false && operandCounter > 1){
          console.log('two operands');
          subtotalEl2 += string[i];
          console.log('subtotalEl2: ' + subtotalEl2);
      } else if (i===string.length-1){
        console.log('solo operand');
        subtotalEl2 += string[i];
        console.log('subtotalEl2: ' + subtotalEl2);
        doMath();
        string = '';
        debugger;
        return subtotal;
      } else {
        subtotalEl2 += string[i];
        console.log('subtotalEl2: ' + subtotalEl2);
      }//closes operand-subtotal conditionals
    }//closes for loop
  }//closes error conditionals

  function doMath() {switch (string[operatorAtIndex]) {
    case '÷':
    // subtotal = subtotalEl1 / subtotalEl2;
    subtotal = string.replace((string.slice(0,nextOperatorIndex)), (subtotalEl1 / subtotalEl2));
    console.log('division subtotal: ' + subtotal);
    $("#screen").html(subtotal);
    subtotalEl1 = 0;
    subtotalEl2 = 0;
    operatorAtIndex = 0;

    break;
    case 'x':
    // subtotal = subtotalEl1 * subtotalEl2;
    subtotal = string.replace((string.slice(0,nextOperatorIndex)), (subtotalEl1 * subtotalEl2));
    console.log('multiplication subtotal: ' + subtotal);
    $("#screen").html(subtotal);
    subtotalEl1 = 0;
    subtotalEl2 = 0;
    operatorAtIndex = 0;

    break;
    case '-':
    // subtotal = subtotalEl1 - subtotalEl2;
    console.log('subtraction');
    subtotal = string.replace((string.slice(0,nextOperatorIndex)), (subtotalEl1 - subtotalEl2));
    console.log('subtraction subtotal: ' + subtotal);
    $("#screen").html(subtotal);
    subtotalEl1 = 0;
    subtotalEl2 = 0;
    operatorAtIndex = 0;

    break;
    default:
    // subtotal = parseInt(subtotalEl1, 10) + parseInt(subtotalEl2, 10);
    console.log('addition');
    subtotal = string.replace((string.slice(0,nextOperatorIndex)), (parseInt(subtotalEl1, 10) + parseInt(subtotalEl2, 10)));
    console.log('string.slice: ' + string.slice(0,nextOperatorIndex));
    console.log('addition subtotal: ' + subtotal);
    $("#screen").html(subtotal);
    subtotalEl1 = 0;
    subtotalEl2 = 0;
    operatorAtIndex = 0;

    }//closes operator switch
  }//closes doMath
}//closes totalIt (leave down here so doMath has string scope)

function totalIt(string){
  if ((!string.includes('÷')) && (!string.includes('x')) && (!string.includes('-')) && (!string.includes('+'))){
    $("#screen").html('Error');
  } else if (string[string.indexOf('÷')+1] === '0'){
    $("#screen").html('Error');
  } else {
  countOperands(string);
  // subtotal = string;
  nextOperatorIndex = string.length;
  console.log('OG string: ' + string);
  for (let i=0; i<string.length; i++){
    console.log("i: " + [i]);
    console.log(parseInt((string[i]).valueOf(), 10));
    console.log(valueIsNaN(parseInt((string[i]).valueOf(), 10)));

    if ((valueIsNaN(parseInt((string[i]).valueOf(), 10)) && (operatorAtIndex === 0))){
      operatorAtIndex = i;
      console.log('operatorAtIndex: ' + operatorAtIndex);
    } else if ((valueIsNaN(parseInt((string[i]).valueOf(), 10)) && (operatorAtIndex !== 0))){
      nextOperatorIndex = i;
      console.log('nextOperatorIndex: ' + nextOperatorIndex);
      doMath();
      // subtotal = string.replace((string.slice(0,nextOperatorIndex)), subtotal);
      $("#screen").html(subtotal);
      return totalIt(subtotal);
    } else if (valueIsNaN(parseInt((string[i]).valueOf(), 10)) === false && i<=operatorAtIndex){
      subtotalEl1 += string[i];
      console.log('subtotalEl1: ' + subtotalEl1);
    } else if (valueIsNaN(parseInt((string[i]).valueOf(), 10)) === false && operandCounter > 1){
        console.log('two operands');
        subtotalEl2 += string[i];
        console.log('subtotalEl2: ' + subtotalEl2);
    } else if (i===string.length-1){
      console.log('solo operand');
      subtotalEl2 += string[i];
      console.log('subtotalEl2: ' + subtotalEl2);
      doMath();
      string = '';
      debugger;
      return subtotal;
    } else {
      subtotalEl2 += string[i];
      console.log('subtotalEl2: ' + subtotalEl2);
    }//closes operand-subtotal conditionals
  }//closes for loop
}//closes error conditionals

function doMath() {switch (string[operatorAtIndex]) {
  case '÷':
  // subtotal = subtotalEl1 / subtotalEl2;
  subtotal = string.replace((string.slice(0,nextOperatorIndex)), (subtotalEl1 / subtotalEl2));
  console.log('division subtotal: ' + subtotal);
  $("#screen").html(subtotal);
  subtotalEl1 = 0;
  subtotalEl2 = 0;
  operatorAtIndex = 0;

  break;
  case 'x':
  // subtotal = subtotalEl1 * subtotalEl2;
  subtotal = string.replace((string.slice(0,nextOperatorIndex)), (subtotalEl1 * subtotalEl2));
  console.log('multiplication subtotal: ' + subtotal);
  $("#screen").html(subtotal);
  subtotalEl1 = 0;
  subtotalEl2 = 0;
  operatorAtIndex = 0;

  break;
  case '-':
  // subtotal = subtotalEl1 - subtotalEl2;
  console.log('subtraction');
  subtotal = string.replace((string.slice(0,nextOperatorIndex)), (subtotalEl1 - subtotalEl2));
  console.log('subtraction subtotal: ' + subtotal);
  $("#screen").html(subtotal);
  subtotalEl1 = 0;
  subtotalEl2 = 0;
  operatorAtIndex = 0;

  break;
  default:
  // subtotal = parseInt(subtotalEl1, 10) + parseInt(subtotalEl2, 10);
  console.log('addition');
  subtotal = string.replace((string.slice(0,nextOperatorIndex)), (parseInt(subtotalEl1, 10) + parseInt(subtotalEl2, 10)));
  console.log('string.slice: ' + string.slice(0,nextOperatorIndex));
  console.log('addition subtotal: ' + subtotal);
  $("#screen").html(subtotal);
  subtotalEl1 = 0;
  subtotalEl2 = 0;
  operatorAtIndex = 0;

  }//closes operator switch
}//closes doMath
}//closes totalIt2 (leave down here so doMath has string scope)

});//closes JS


// if ((subtotal.includes('÷')) || (subtotal.includes('x')) || (subtotal.includes('-')) || (subtotal.includes('+'))){
//   subtotal = string.replace((string.slice(0,nextOperatorIndex)), subtotal);
//   $("#screen").append("= " + subtotal);
//   totalIt(subtotal);
// } else { $("#screen").append("= " + subtotal);
// return subtotal;
// }// closes operator reloop

// function totalIt(string){
//   subtotal = string;
//   console.log('OG string: ' + string);
//   for (let i=0; i<string.length; i++){
//     console.log("i: " + [i]);
//     console.log(parseInt((string[i]).valueOf(), 10));
//     console.log(valueIsNaN((string[i]).valueOf()));
//     if (valueIsNaN(parseInt((string[i]).valueOf(), 10)) === false && i<=operatorAtIndex){
//       subtotalEl1 += string[i];
//       operatorAtIndex = [i];
//       console.log('if subtotal1');
//     } else if (valueIsNaN(parseInt((string[i]).valueOf(), 10)) === false && i>operatorAtIndex){
//       subtotalEl2 += string[i];
//       nextOperatorIndex = [i+1];
//       console.log('else if subtotal2');
//     } else if (valueIsNaN(parseInt((string[i]).valueOf(), 10)) && nextOperatorIndex<string.length){
//       operatorAtIndex = [i];
//       console.log('else if nextOp');
//       // operatorFunction();
//     } else {
//       operatorAtIndex = [i];
//       console.log('else oneOp');
//     }
//   console.log('subtotalEl1:' + subtotalEl1);
//   console.log('subtotalEl2:' + subtotalEl2);
//   console.log('operatorIndex:' + operatorAtIndex);
//   console.log('nextOperatorIndex:' + nextOperatorIndex);
//   console.log(subtotal);
// }//closes subtotalElements for-loop





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
