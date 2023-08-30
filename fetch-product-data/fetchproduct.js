fetch('/products/product-handle.js')
  .then(response => response.json())
  .then(data => console.log(data));
