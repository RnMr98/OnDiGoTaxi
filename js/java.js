
    function clickme(){
        alert("your message has been sent");
    }

    // Get all input elements
const inputs = document.querySelectorAll('input, select');

// Add event listener to each input element
inputs.forEach(input => {
  input.addEventListener('blur', () => {
    // Check if input has a value
    if (input.value.trim() === '') {
      // Show alert if input is empty
      alert(`${input.name} is required`);
    }
  });
});
