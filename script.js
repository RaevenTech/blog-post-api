const blogPostsEl = document.getElementById("blog-posts")
console.log(blogPostsEl)

const baseURL = "https://apis.scrimba.com/jsonplaceholder/"

fetch(baseURL + "posts", {method: "GET"})
  .then(resp => resp.json())
  .then(data => {
    const postsArr = data.slice(0,5)
    let html = ""
    postsArr.map((post) => {
      const { title, body } = post
      html += `
      <h3 id="blog-title">${title}</h3>
      <p id="blog-body">${body}</p>
      <hr/>`
    })
    blogPostsEl.innerHTML = html
  })