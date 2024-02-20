// function displayMessage(message) {
//   var messageElement = document.getElementById('message');
//   messageElement.textContent = message;
//   messageElement.style.display = 'block'; // Show the message

//   setTimeout(function() {
//     messageElement.style.display = 'none'; // Hide the message after 3 seconds
//   }, 3000);
// }

function displayMessage(message) {
  var messageElement = document.getElementById('message');
  messageElement.textContent = message;
  messageElement.style.display = 'block'; // Show the message

  setTimeout(function() {
    messageElement.style.display = 'none'; // Hide the message after 3 seconds
  }, 3000);
  
  // Reset button size after 3 seconds in mobile mode
  if (window.innerWidth <= 767) {
    setTimeout(function() {
      var buttons = document.getElementsByClassName('btn');
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.transform = 'scale(1)';
      }
    }, 300);
  }
}
