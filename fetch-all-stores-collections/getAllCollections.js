let allCollections = [];

function fetchCollections(page = 1) {
    fetch(`/collections.json?page=${page}&limit=50`)
        .then(response => response.json())
        .then(data => {
            if (data.collections.length) {
                allCollections = allCollections.concat(data.collections);
                // Recursively fetch the next page
                fetchCollections(page + 1);
            } else {
                // All collections have been fetched
                console.log(allCollections);
            }
        });
}

fetchCollections();
