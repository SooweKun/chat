const chat = document.getElementById("chat")
const auth = document.getElementById("auth")

let username = document.getElementById("username")
let messageInput = document.getElementById('message-input');

messageInput.addEventListener('keypress', function (event) {

  if (event.key === 'Enter') {
    sendMessage();
  }

});

username.addEventListener('keypress', function (event) {

  if (event.key === 'Enter') {
   console.log(username.value)
  }
});


document.getElementById("join-user").addEventListener("click", (e) => {

  e.preventDefault()
  chat.classList.add("active")
  auth.classList.remove("active")
})

document.getElementById("exit-chat").addEventListener("click", (e) => {

  e.preventDefault()
  chat.classList.remove("active")
  auth.classList.add("active")

})

document.getElementById("join-user").addEventListener("click", (e) => {

  console.log(username.value)

  const profileDiv = document.getElementById("username");
  const profileDivvalue = profileDiv.value.trim();
  const updatediv = document.createElement('p');
  updatediv.textContent = `Пользователь ${profileDivvalue} присоединился`;
  document.getElementById("user-joined").appendChild(updatediv);

})

function sendMessage() {

  const InputValue = messageInput.value.trim();

  if (InputValue) {
    const messageDiv = createMessageDiv(username.value, InputValue);
    document.getElementById("messages").appendChild(messageDiv);
    username.value = '';
  }
}

document.getElementById("send-message").addEventListener("click", (e) => {

  sendMessage();

});

function createMessageDiv(name, text) {

  const messageDiv = document.createElement('div');
  messageDiv.classList.add('my-message');

  const nameDiv = document.createElement('div');
  nameDiv.classList.add('name');
  nameDiv.textContent = name;

  const textDiv = document.createElement('div');
  textDiv.classList.add('text');
  textDiv.textContent = text;


  messageDiv.appendChild(nameDiv);
  messageDiv.appendChild(textDiv);

  return messageDiv;

}