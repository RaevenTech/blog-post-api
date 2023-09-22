const blogPostsEl = document.getElementById("blog-posts")
const baseURL = "https://apis.scrimba.com/jsonplaceholder/"

let postsArr = []

const renderPosts = () => {
  let html = ""
  postsArr.map((post) => {
    const { title, body } = post
    html += `
    <div class="single-post">
    <h3 id="blog-title">${title}</h3>
    <p id="blog-body">${body}</p>
    <hr/></div>`
  })
  blogPostsEl.innerHTML = html
}

fetch(baseURL + "posts", {method: "GET"})
  .then(resp => resp.json())
  .then(data => {
    postsArr = data.slice(0,5)
    let html = ""
    renderPosts()
  })


  document.getElementById("new-blog-post").addEventListener("submit", function(e){
    e.preventDefault()
    const postTitle = document.getElementById("blog-text-input").value
    const postBody = document.getElementById("blog-textarea").value
    const blogPostData ={
      title: postTitle,
      body: postBody,
    }
    const options = {
      method: "POST",
      body: JSON.stringify(blogPostData),
      headers: {
          "Content-Type": "application/json"
      }
  }
  
  fetch(baseURL + "posts", options)
      .then(res => res.json())
      .then(postData => {
          postsArr.unshift(postData)
          renderPosts()
      })
  })
