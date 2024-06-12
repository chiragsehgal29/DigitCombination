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

  
  function copyOutput() {
    var outputText = document.getElementById("output").innerText.trim();
    var textarea = document.createElement("textarea");
    textarea.value = outputText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Output copied to clipboard!");
  }
  

  function removeSameDigitNumbers() {
    var output = document.getElementById("output").innerHTML;
    var uniqueOutput = output.replace(/\b(\d)(?=\d*\1\b|\b)\d*\b,?/g, "").trim();
    document.getElementById("output").innerHTML = uniqueOutput;
  }
