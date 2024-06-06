const inputValue = document.getElementById("user-input");

const number = document.querySelectorAll(".numbers").forEach(function (item) {
  item.addEventListener("click", function (e) {
    if (inputValue.innerText === "NaN") {
      inputValue.innerText = "";
    }
    if (inputValue.innerText === "0") {
      inputValue.innerText = "";
    }
    inputValue.innerText += e.target.innerML.trim();
  });
});

const calculate = document.querySelectorAll(".operations").forEach(function (item) {
  item.addEventListener("click", function (e) {
    let lastValue = inputValue.innerText.substring(inputValue.innerText.length - 1);
    if (!isNaN(lastValue) && e.target.innerML === "=") {
      inputValue.innerText = eval(inputValue.innerText);
    } else if (e.target.innerML === "AC") {
      inputValue.innerText = 0;
    } else if (e.target.innerML === "DEL") {
      inputValue.innerText = inputValue.innerText.substring(0, inputValue.innerText.length - 1);
      if (inputValue.innerText.length == 0) {
        inputValue.innerText = 0;
      }
    } else {
      inputValue.innerText += e.target.innerML.trim();
    }
  });
});