window.onload = function() {
// In script.js or another appropriate JavaScript file
    const tag = document.getElementById('tagSelect-random').value;
    fetch(`/api/articles/random-article-by-tag?tag=${tag}`)
        .then(response => response.json())
        .then(article => {
            const articlesList = document.getElementById('randomArticleList');
            articlesList.innerHTML = ''; // Clear previous articles

            // Create a new list item element for the article
            const titleItem = document.createElement('h1');
            // Set the text of the list item to include the article's title
            
            titleItem.textContent = `${article.title}`;
            // Append the new list item for the title to the 'articlesList' element
            articlesList.appendChild(titleItem);

            const tagItem = document.createElement('p');
            tagItem.className = 'tagItem';
            tagItem.textContent = `${article.tags}`;
            articlesList.appendChild(tagItem)

            // Create a new list item element for the article body
            const bodyItem = document.createElement('p');
            // Set the text of the list item to include the article's body
            bodyItem.className = 'bodyItem';
            bodyItem.textContent = `${article.body}`;
            // Append the new list item for the body to the 'articlesList' element
            articlesList.appendChild(bodyItem);
        })
        .catch(error => console.error('Error fetching random article:', error));
};
