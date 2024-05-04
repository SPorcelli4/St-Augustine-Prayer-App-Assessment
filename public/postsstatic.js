// In script.js or another appropriate JavaScript file
document.getElementById('getallposts').addEventListener('click', function() {
    fetch(`/all-posts`)
        .then(response => response.json())
        .then(data => {
            const postsList = document.getElementById('postsList');
            postsList.innerHTML = ''; // Clear previous articles

            data.forEach(post => {
                const titleItem = document.createElement('h1');
                titleItem.textContent = post.header;
                postsList.appendChild(titleItem);

            });
        })
        .catch(error => console.error('Error fetching random article:', error));
});
