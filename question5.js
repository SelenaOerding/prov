// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    const postsContainer = document.getElementById("posts");

    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post-card");

      postElement.innerHTML = `
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
            `;

      postsContainer.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

fetchPosts();
