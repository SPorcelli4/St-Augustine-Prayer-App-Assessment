document.getElementById('fetchArticles-random').addEventListener('click', function() {
    // Make a HTTP GET request to the server's '/api/articles/random-article' endpoint
    fetch('/api/articles/random-article')
        .then(response => response.json())  // Convert the response to JSON
        .then(article => {
            // Find the HTML element with the ID 'articlesList-random'
            const articlesList = document.getElementById('articlesList-random');
            articlesList.innerHTML = ''; // Clear any existing content in the list

            // Create a new list item element for the article title
            const titleItem = document.createElement('h1');
            // Set the text of the list item to include the article's title
            titleItem.textContent = `${article.title}`;
            // Append the new list item for the title to the 'articlesList' element
            articlesList.appendChild(titleItem);

            // Create a new list item element for the article body
            const bodyItem = document.createElement('p');
            // Set the text of the list item to include the article's body
            bodyItem.textContent = `${article.body}`;
            // Append the new list item for the body to the 'articlesList' element
            articlesList.appendChild(bodyItem);

            const tagsItem = document.createElement('p');

            tagsItem.textContent = `${article.tags}`;

            articlesList.appendChild(tagsItem);
        })
        .catch(error => console.error('Error fetching article:', error)); // Log any errors to the console
});

// In script.js or another appropriate JavaScript file
document.getElementById('fetchRandomArticle').addEventListener('click', function() {
    const tag = document.getElementById('tagSelect-random').value;
    fetch(`/api/articles/random-article-by-tag?tag=${tag}`)
        .then(response => response.json())
        .then(article => {
            const articlesList = document.getElementById('randomArticleList');
            articlesList.innerHTML = ''; // Clear previous articles

            const titleItem = document.createElement('h1');
            titleItem.textContent = article.title;
            articlesList.appendChild(titleItem);

            const bodyItem = document.createElement('p');
            bodyItem.textContent = article.body;
            articlesList.appendChild(bodyItem);
        })
        .catch(error => console.error('Error fetching random article:', error));
});
