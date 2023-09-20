const baseURL = "https://apis.scrimba.com/jsonplaceholder/"

fetch(baseURL + "posts", {method: "GET"})
  .then(resp => resp.json())
  .then(data => console.log(data.slice(0,5)))