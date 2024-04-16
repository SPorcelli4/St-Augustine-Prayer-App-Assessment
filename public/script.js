document.getElementById('fetchArticles-random').addEventListener('click', function() {
    // Make a HTTP GET request to the server's '/api/random-article' endpoint
    fetch('/api/articles')
    fetch('/api/articles/random-article')
        .then(response => response.json())  // Convert the response to JSON
        .then(article => {
            // Find the HTML element with the ID 'articlesList'
            const articlesList = document.getElementById('articlesList-random');
            articlesList.innerHTML = ''; // Clear any existing content in the list

            // Create a new list item element for the article
            const articleItem = document.createElement('li');
            // Set the text of the list item to include the article's title and body
            articleItem.textContent = `Title: ${article.title}, Body: ${article.body}`;
            // Append the new list item to the 'articlesList' element
            articlesList.appendChild(articleItem);
        })
        .catch(error => console.error('Error fetching article:', error)); // Log any errors to the console
});

