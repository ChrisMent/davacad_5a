async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}

function computeServing(serving) {
$("#servingInput").on("change", function () {
  if ($(this).val() <= 0) {
    $("#errorMessage").text("Bitte gebe eine gültige Menge ein!").show();
  } else {
    var serving = $(this).val();
    $(".js-recipeIngredient").each(function (index, item) {
      $(item)
        .children("span")
        .html($(item)[0].dataset.basevalue * serving);
    });
    $("#errorMessage").hide();
  }
});
}

$("#servingInput").on("change", function () {
  computeServing($(this).val());
});
$(".js-calcService").on("click", function () {
  computeServing($("#servingInput").val());
});

computeServing(4);
