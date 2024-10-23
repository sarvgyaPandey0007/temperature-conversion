function convertTemperature() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const inputUnit = document.getElementById("inputUnit").value;
  const outputUnit = document.getElementById("outputUnit").value;

  if (isNaN(inputValue)) {
      document.getElementById("result").textContent = "Please enter a valid temperature.";
      return;
  }

  let convertedValue;

  // Convert from inputUnit to outputUnit
  if (inputUnit === "Celsius") {
      if (outputUnit === "Fahrenheit") {
          convertedValue = (inputValue * 9/5) + 32;
      } else if (outputUnit === "Kelvin") {
          convertedValue = inputValue + 273.15;
      } else {
          convertedValue = inputValue;
      }
  } else if (inputUnit === "Fahrenheit") {
      if (outputUnit === "Celsius") {
          convertedValue = (inputValue - 32) * 5/9;
      } else if (outputUnit === "Kelvin") {
          convertedValue = (inputValue - 32) * 5/9 + 273.15;
      } else {
          convertedValue = inputValue;
      }
  } else if (inputUnit === "Kelvin") {
      if (outputUnit === "Celsius") {
          convertedValue = inputValue - 273.15;
      } else if (outputUnit === "Fahrenheit") {
          convertedValue = (inputValue - 273.15) * 9/5 + 32;
      } else {
          convertedValue = inputValue;
      }
  }

  // Display the result
  document.getElementById("result").textContent = `Result: ${convertedValue.toFixed(2)} ${outputUnit}`;
}