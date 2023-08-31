var cartToken = document.cookie.split('; ').find(row => row.startsWith('cart=')).split('=')[1];
console.log("Cart Token:", cartToken);
