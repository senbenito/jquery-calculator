$(function() {
  $('#zero').id = 0;
  var buttons = $('.buttons')[0];
  var operatorStorage = [];

  for (let i = 0; i < buttons.children.length; i++) {
    var buttonChildren = buttons.children[i];
    // console.log(buttonChildren);
    if (buttonChildren.className !== "operator") {
      buttonChildren.setAttribute("id", buttonChildren.innerHTML);
    }
  }


  $('#buttons-container').click(function(event) {
    if ((event.target).id === 'equals'){
    var screenTotal = $("#screen").html();
    console.log(screenTotal);
    console.log(operatorStorage);
    totalIt(screenTotal);
  } else if ((event.target).className === "operator"){
        let operator = (event.target).innerHTML;
        switch (operator) {
          case '÷':
            $("#screen").append((event.target).innerHTML);
            operatorStorage.push(operator);
            break;
          case 'x':
            $("#screen").append((event.target).innerHTML);
            operatorStorage.push(operator);
            break;
          case '-':
            $("#screen").append((event.target).innerHTML);
            operatorStorage.push(operator);
            break;
          case '+':
            $("#screen").append((event.target).innerHTML);
            operatorStorage.push(operator);
            break;
          default:
            $("#screen").html("");
            operatorStorage = [];
        }
    } else {
      $("#screen").append((event.target).innerHTML);
    }
  });

// "7x5+2"
// ["x", "+"]

  function totalIt(string){
    var subtotalHolder = '';
      for (let i=0; i<operatorStorage.length; i++){
        if (operatorStorage.includes("x") || operatorStorage.includes("÷")){
          console.log("multiply or divide!");
          let multiplyIndex = string.indexOf("x");
          let divideIndex = string.indexOf("÷");
        } else {
          console.log("add or subtract");
        }
        // let firstOperatorIndex = string.indexOf(operatorStorage[i]);
        // let nextOperatorIndex = string.indexOf(operatorStorage[i+1]);
        // let firstNumber = string.slice(0, firstOperatorIndex);
        // let nextNumber = string.slice(firstOperatorIndex+1, nextOperatorIndex);
      } // closes for loop
      // return firstNumber + operatorStorage[0] + lastNumber;
    } //closes totalIt
});//closes JS
