document.addEventListener('DOMContentLoaded', function() {
    var count = 0;
    var countElement = document.getElementById('count');
  
    // Function to update the count element with the current count
    function updateCount() {
      countElement.textContent = count;
    }
  
    // Add event listener for the add button
    document.getElementById('add').addEventListener('click', function() {
      count++;
      updateCount();
    });
  
    // Add event listener for the subtract button
    document.getElementById('subtract').addEventListener('click', function() {
      count--;
      updateCount();
    });
  
    // Add event listener for the reset button
    document.getElementById('reset').addEventListener('click', function() {
      count = 0;
      updateCount();
    });
  });
  