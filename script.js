function displayMessage(message) {
  var messageElement = document.getElementById('message');
  messageElement.textContent = message;
  messageElement.style.display = 'block'; // Show the message

  setTimeout(function() {
    messageElement.style.display = 'none'; // Hide the message after 3 seconds
  }, 3000);
}
