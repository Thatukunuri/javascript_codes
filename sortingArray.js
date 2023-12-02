
function sortArrayDescending() {
  const userInput = prompt("Enter numbers separated by commas:");
  const inputArray = userInput.split(',').map(Number);
  if (inputArray.some(isNaN)) {
    alert("Invalid input. Please enter valid numbers.");
    return;
  }
  const sortedArray = inputArray.sort((a, b) => b - a);
  alert("Sorted Array in Descending Order: " + sortedArray.join(', '));
}
sortArrayDescending();