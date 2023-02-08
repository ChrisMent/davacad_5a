function changeRecipe() {
    portRecipe1();
    portRecipe2();
    portRecipe3();
    portRecipe4();
    portRecipe5();
    portRecipe6();
    portRecipe7();
    portRecipe8();
    portionChanger();
    clearInput();
}

function portRecipe1() {
    let port = +document.getElementById('porty').value
    let result = 250 * port;
    document.getElementById('ing1').innerHTML = result;
}

function portRecipe2() {
    let port = +document.getElementById('porty').value
    let result = 1 * port;
    document.getElementById('ing2').innerHTML = result;
}

function portRecipe3() {
    let port = +document.getElementById('porty').value
    let result = 1 * port;
    document.getElementById('ing3').innerHTML = result;
}

function portRecipe4() {
    let port = +document.getElementById('porty').value
    let result = 1 * port;
    document.getElementById('ing4').innerHTML = result;
}

function portRecipe5() {
    let port = +document.getElementById('porty').value
    let result = 1 * port;
    document.getElementById('ing5').innerHTML = result;
}

function portRecipe6() {
    let port = +document.getElementById('porty').value
    let result = 100 * port;
    document.getElementById('ing6').innerHTML = result;
}

function portRecipe7() {
    let port = +document.getElementById('porty').value
    let result = 200 * port;
    document.getElementById('ing7').innerHTML = result;
}

function portRecipe8() {
    let port = +document.getElementById('porty').value
    let result = 1 * port;
    document.getElementById('ing8').innerHTML = result;
}

function clearInput() {
    document.getElementById('porty').value = '';
}

function portionChanger() {
    let portion = +document.getElementById('porty').value;
    document.getElementById('inputPortion').innerHTML = portion;
}

window.addEventListener('load', function(){
    document.getElementById("porty").addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.key === 'Enter') {
        changeRecipe();
      }
    });
  });
  
