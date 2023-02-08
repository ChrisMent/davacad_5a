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

function changeRecipe() {
    portRecipe1();
    portRecipe2();
    portRecipe3();
    portRecipe4();
    portRecipe5();
    portRecipe6();
    portRecipe7();
    portRecipe8();
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

window.addEventListener('load', function(){
    document.getElementById("porty").addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.key === 'Enter') {
        changeRecipe();
      }
    });
  });
  
