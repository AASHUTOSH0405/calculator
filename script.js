let string = "";
let buttons = document.querySelectorAll(".button");
let input = document.querySelector(".input");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerText.trim(); 
    if (value === "C") {
      string = "";
      input.value = "";
    }
    else if (value === "=") {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    }
    else if (value === "%") {
      try {
        string = String(eval(string + "/100"));
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    }
    else {
      string += value;
      input.value = string;
    }
  });
});
