fetch('/cart.js')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching cart data:', error));
