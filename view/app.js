const ancor = document.getElementById("about")
const home = document.getElementById("home")
const body = document.getElementById("body")

ancor.addEventListener("click", handleEvent)
home.addEventListener("click", handleEvent)
async function handleEvent(event){
    event.preventDefault()
    history.pushState({}, "", event.target.href)
    console.log(event.target.href)
    const path = routes[window.location.pathname]
    const data = await fetch(path).then(data => data.text());
    body.innerHTML = data;
}

window.addEventListener('DOMContentLoaded', async function() { 
const path = routes[window.location.pathname]
console.log("ola")
const data = await fetch(path).then(data => data.text())
body.innerHTML = data
  });
const routes = {
    "/": "/pages/home.html",
    "/about": "/pages/about.html"
}

