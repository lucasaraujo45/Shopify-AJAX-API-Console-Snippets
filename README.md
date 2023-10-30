# 🛍 Shopify Console AJAX API Cheat Sheet

A collection of scripts to quickly fetch and inspect various data points from a Shopify store using the browser's console. These scripts utilize the AJAX API provided by Shopify to retrieve real-time data from the storefront.

---
![gif example](https://github.com/lucasaraujo45/shopify-dev-console/assets/29403436/a30f8b10-1270-41d8-9889-c4878510b556)

---

## 🚀 Getting Started

1. Navigate to your Shopify store in a web browser.
2. Open the browser's developer console. (Usually `Ctrl + Shift + I` or `Cmd + Option + I`)
3. Copy and paste the desired script from this repository into the console.
4. Hit `Enter` to execute the script and view the results.

---
 
## 📂 Scripts Overview

### 🛒 [Fetch All Store Collections](./fetch-all-stores-collections)

This script fetches all collections available in the store by paginating through the results to ensure complete retrieval.

### 🛍 [Fetch Cart Data](./fetch-cartjs)

Fetches the current cart data, which includes details about items added to the cart, cart attributes, and more.

### 📦 [Fetch Specific Collection Data](./fetch-collection-data)

Retrieves data for a specific collection using its handle. This can be useful for inspecting products within a particular collection.

### 🏷 [Fetch Specific Product Data](./fetch-product-data)

Fetches data for a specific product by its handle. This provides detailed information about product variants, pricing, and other related attributes.

### 🏪 [Fetch Shop Data](./fetch-shop-data)

Gathers general data about the Shopify store, such as the shop's name, currency, email, and other metadata.

### 🍪 [Manage Shop Cart Cookie](./get-and-transfer-cart-cookie)

By extracting the cart's unique token, troubleshooting cart-related issues becomes more efficient, allowing for direct examination of user-reported cart anomalies by recreating the exact cart state in any browser or device. This snippet is great for diagnosing and addressing cart-specific challenges in real-time.

---

## Requirements and limitations
- This is an unauthenticated API. It doesn’t require access tokens or a client ID to access.
- There are no hard rate limits on the Ajax API. It’s still subject to Shopify’s standard API abuse-prevention measures.
- All API responses return JSON-formatted data.
- The Ajax API can’t be used to read any customer or order data, or update any store data. If you need more extensive access, check the Admin API.

---

## 💡 Contributing

Contributions are welcome! If you have additional scripts or improvements to share, please make a pull request or open an issue to discuss the changes.

---

## 📜 License

This project is open source and available under the MIT License. Use these scripts responsibly and ethically.
