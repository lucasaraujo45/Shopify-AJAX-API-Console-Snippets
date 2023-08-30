Fetches data for all collections in your store.


#collection-fetch.js
       Collections first 30 collections without paginations

#getAllCollections.js

    Shopify paginates the results returned by the AJAX API for performance reasons. By default, endpoints like /collections.json return a limited number of results, often 50 or less. This script provides a method to fetch   all   collections by making multiple requests and aggregating the results.

Usage

    Open your Shopify store in a web browser.
    Launch the browser's developer console.
    Copy and paste the following script into the console and hit Enter:
