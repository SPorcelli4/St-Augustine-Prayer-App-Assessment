document.getElementById('fetchArticles').addEventListener('click', function() {
    fetch('/api/articles')
        .then(response => response.json())
        .then(data => {
            const articlesList = document.getElementById('articlesList');
            articlesList.innerHTML = ''; // Clear previous entries
            data.forEach(article => {
                const articleItem = document.createElement('li');
                articleItem.textContent = `Title: ${article.title}, Body: ${article.body}`;
                articlesList.appendChild(articleItem);
            });
        })
        .catch(error => console.error('Error fetching articles:', error));
});