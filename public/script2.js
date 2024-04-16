// Add an event listener to the HTML element with the ID 'fetchArticles'
document.getElementById('fetchArticles').addEventListener('click', function() {
    // Make a HTTP GET request to the server's '/api/articles' endpoint
    fetch('/api/articles')
        .then(response => response.json())  // Convert the response to JSON
        .then(data => {
            // Find the HTML element with the ID 'articlesList'
            const articlesList = document.getElementById('articlesList');
            articlesList.innerHTML = ''; // Clear any existing content in the list

            // Iterate over each article received from the server
            data.forEach(article => {
                // Create a new list item element for each article
                const articleItem = document.createElement('li');
                // Set the text of the list item to include the article's title and body
                articleItem.textContent = `Title: ${article.title}, Body: ${article.body}`;
                // Append the new list item to the 'articlesList' element
                articlesList.appendChild(articleItem);
            });
        })
        .catch(error => console.error('Error fetching articles:', error)); // Log any errors to the console
});
