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
