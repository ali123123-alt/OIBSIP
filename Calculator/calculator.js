var input = document.querySelector("#input");
var output = document.querySelector("#output");
var clear = document.querySelector("#clear");
var del = document.querySelector("#del");
choice = false;
function Calculate(a) {
  if (choice == true) {
    input.value = "";
    choice = false;
  }
  input.value += a;
}
clear.addEventListener("click", () => {
  output.value = "0";
  input.value = "";
});
del.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});
function sqrt() {
  var square = Math.sqrt(input.value);
  output.value = square;
}
function per(){
    var percentage=eval(input.value);
    var temp=percentage*100;
    output.value=temp+"%";
}
function equal() {
  if (input.value.charAt(input.value.length - 1) == ".") {
    output.value = "Math error";
    choice = true;
  } else if (input.value.charAt(input.value.length - 1) == "+") {
    output.value = "Math error";
    choice = true;
  } else if (input.value.charAt(input.value.length - 1) == "*") {
    output.value = "Math error";
    choice = true;
  } else if (input.value.charAt(input.value.length - 1) == "/") {
    output.value = "Math error";
    choice = true;
  } else if (input.value.charAt(input.value.length - 1) == "*") {
    output.value = "Math error";
    choice = true;
  } else {
    output.value = eval(input.value);
    choice = true;
  }
}
