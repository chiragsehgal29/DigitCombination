// function combineDigits() {
//     var leftDigits = document.getElementById("leftDigits").value;
//     var rightDigits = document.getElementById("rightDigits").value;
  
//     if (leftDigits === "" || rightDigits === "") {
//       alert("Please enter both left and right digits.");
//       return;
//     }
  
//     var output = document.getElementById("output");
//     output.innerHTML = "";
  
//     for (var i = 0; i < leftDigits.length; i++) {
//       for (var j = 0; j < rightDigits.length; j++) {
//         var combination = parseInt(leftDigits[i] + rightDigits[j]);
//         output.innerHTML += combination + ", ";
//       }
//     }
//   }
  
function combineDigits() {
    var leftDigits = document.getElementById("leftDigits").value;
    var rightDigits = document.getElementById("rightDigits").value;
  
    if (leftDigits === "" || rightDigits === "") {
      alert("Please enter both left and right digits.");
      return;
    }
  
    var output = document.getElementById("output");
    output.innerHTML = "";
  
    for (var i = 0; i < leftDigits.length; i++) {
      for (var j = 0; j < rightDigits.length; j++) {
        var combination = leftDigits[i] + rightDigits[j];
        output.innerHTML += combination + ", ";
      }
    }
  }



