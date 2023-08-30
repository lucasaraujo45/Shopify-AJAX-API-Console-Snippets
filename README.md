Shopify Console Cheat Sheet

A collection of scripts to quickly fetch and inspect various data points from a Shopify store using the browser's console. These scripts utilize the AJAX API provided by Shopify to retrieve real-time data from the storefront.

Getting Started

    Navigate to your Shopify store in a web browser.
    Open the browser's developer console. (Usually Ctrl + Shift + I or Cmd + Option + I)
    Copy and paste the desired script from this repository into the console.
    Hit Enter to execute the script and view the results.

    Scripts Overview
Fetch All Store Collections

Directory: fetch-all-stores-collections

This script fetches all collections available in the store by paginating through the results to ensure complete retrieval.
Fetch Cart Data

Directory: fetch-cartjs

Fetches the current cart data, which includes details about items added to the cart, cart attributes, and more.
Fetch Specific Collection Data

Directory: fetch-collection-data

Retrieves data for a specific collection using its handle. This can be useful for inspecting products within a particular collection.
Fetch Specific Product Data

Directory: fetch-proudct-data

Fetches data for a specific product by its handle. This provides detailed information about product variants, pricing, and other related attributes.
Fetch Shop Data

Directory: fetch-shop-data

Gathers general data about the Shopify store, such as the shop's name, currency, email, and other metadata.
Contributing

Contributions are welcome! If you have additional scripts or improvements to share, please make a pull request or open an issue to discuss the changes.
License

This project is open source and available under the MIT License. Use these scripts responsibly and ethically.
