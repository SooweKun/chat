const chat = document.getElementById("chat")
const auth = document.getElementById("auth")

document.getElementById("join-user").addEventListener("click", (e) => {
  e.preventDefault()
  chat.classList.add("active")
  auth.classList.remove("active")
  // const data = axios.get("https://jsonplaceholder.typicode.com/todos")
  // console.log(data.data)

})

document.getElementById("exit-chat").addEventListener("click", (e) => {
  e.preventDefault()
  chat.classList.remove("active")
  auth.classList.add("active")
})