// Append the value to the input
function appendValue(value) {
    const result = document.getElementById("result");
    if (result.value === "0") {
      result.value = value;
    } else {
      result.value += value;
    }
  }
  
  // Clear the input field
  function clearResult() {
    const result = document.getElementById("result");
    result.value = "0";
  }
  
  // Calculate the result
  function calculateResult() {
    const result = document.getElementById("result");
    try {
      result.value = eval(result.value);
    } catch (error) {
      alert("Invalid calculation");
      clearResult();
    }
  }
  