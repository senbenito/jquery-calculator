$(function() {
  $('#zero').id = 0;
  var buttons = $('.buttons')[0];
  var operatorStorage = [];

  for (let i = 0; i < buttons.children.length; i++) {
    var buttonChildren = buttons.children[i];
    console.log(buttonChildren);
    if (buttonChildren.className !== "operator") {
      buttonChildren.setAttribute("id", buttonChildren.innerHTML);
    }
  }


  $('#buttons-container').click(function(event) {
    if ((event.target).id === 'equals'){
    var screenTotal = $("#screen").html();
    // console.log(typeof screenTotal);
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
        }
    } else {
      $("#screen").append((event.target).innerHTML);
    }
  });

  function totalIt(string){
    if (operatorStorage.length > 1){
      let firstOperatorIndex = string.indexOf(operatorStorage[0]);
      let firstNumber = string.slice(0,firstOperatorIndex);
      let lastNumber = string.slice(firstOperatorIndex+1);
      return firstNumber + operatorStorage[0] + lastNumber;
    } else {

    }
}


    let firstOperatorIndex = string.indexOf(operator);
    if (string.indexOf(firstOperatorIndex+1, operator) === -1){
      string.substring(firstOperatorIndex)
    }
    let lastOperator = string.indexOf(firstOperatorIndex+1, operator);
    let computeThis = string.substring(firstOperatorIndex, lastOperator);

  }


});
