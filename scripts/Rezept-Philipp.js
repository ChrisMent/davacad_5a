async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}


function ingredientCalculator() {
    ingredient1();
    ingredient2();
    ingredient3();
    ingredient4();
    ingredient5();
    ingredient6();
    ingredient7();
    ingredient8();
    ingredient9();
    ingredient10();
}

function ingredient1() {
    let portion = +document.getElementById('portion').value
    let result = 0.25 * portion;
    document.getElementById('salad').innerHTML = result;
}

function ingredient2() {
    let portion = +document.getElementById('portion').value
    let result = 100 * portion;
    document.getElementById('shrimp').innerHTML = result;
}

function ingredient3() {
    let portion = +document.getElementById('portion').value
    let result = 0.25 * portion;
    document.getElementById('garlic').innerHTML = result;
}

function ingredient4() {
    let portion = +document.getElementById('portion').value
    let result = 0.25 * portion;
    document.getElementById('paprika').innerHTML = result;
}

function ingredient5() {
    let portion = +document.getElementById('portion').value
    let result = 0.25 * portion;
    document.getElementById('onion').innerHTML = result;
}

function ingredient6() {
    let portion = +document.getElementById('portion').value
    let result = 0.25 * portion;
    document.getElementById('lemon').innerHTML = result;
}

function ingredient7() {
    let portion = +document.getElementById('portion').value
    let result = 2 * portion;
    document.getElementById('sauce').innerHTML = result;
}

function ingredient8() {
    let portion = +document.getElementById('portion').value
    let result = 15 * portion;
    document.getElementById('mayonnaise').innerHTML = result;
}

function ingredient9() {
    let portion = +document.getElementById('portion').value
    let result = 10 * portion;
    document.getElementById('ketchup').innerHTML = result;
}

function ingredient10() {
    let portion = +document.getElementById('portion').value
    let result = 50 * portion;
    document.getElementById('yogurt').innerHTML = result;
}


window.addEventListener('load', function(){
    document.getElementById("portion").addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.key === 'Enter') {
        ingredientCalculator();
      }
    });
  });