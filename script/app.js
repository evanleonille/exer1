function displayProduct() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum * secondNum;
  document.getElementById("Prodanswer").innerHTML = ` ${firstNum} * ${secondNum}, equals to ${total}` ;
}



function displayDiff() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum - secondNum;
  document.getElementById("Subanswer").innerHTML = ` ${firstNum} - ${secondNum}, equals to ${total}` ;
}

  


document.getElementById('multiplyButton').addEventListener("click", displayProduct);
document.getElementById('subButton').addEventListener("click", displayDiff);
