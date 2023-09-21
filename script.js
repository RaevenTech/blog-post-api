const blogPostsEl = document.getElementById("blog-posts")

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


  document.getElementById("new-blog-post").addEventListener("submit", function(e){
    e.preventDefault()
    const postTitle = document.getElementById("blog-text-input").value
    const postBody = document.getElementById("blog-textarea").value
    const blogPost ={
      title: postTitle,
      body: postBody,
    }
    fetch(baseURL + "posts", {
      method: "POST",
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
      }),
      headers:{
        "Content-type": "application/json"
      }
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  })

