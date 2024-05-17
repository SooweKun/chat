const chat = document.getElementById("chat")
const auth = document.getElementById("auth")

let username = document.getElementById("username")
let messageInput = document.getElementById('message-input');

const sendMessagestream = ({msg}) => {

  axios.post('http://127.0.0.1:3000/stream', {

    message: msg

  })

  .then((response) =>  console.log(response.data))
  .catch( (error)  => console.error(error))
}

messageInput.addEventListener('keypress', function (event) {

  if (event.key === 'Enter') sendMessage();
});

username.addEventListener('keypress', function (event) {

  if (event.key === 'Enter')  console.log(username.value)

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

  const profileDiv = document.getElementById("username");
  const profileDivvalue = profileDiv.value.trim();
  const updatediv = document.createElement('p');

  updatediv.textContent = `Пользователь ${profileDivvalue} присоединился`;
  document.getElementById("user-joined").appendChild(updatediv);

})

const sendMessage = () => {
  
  const InputValue = messageInput.value.trim();
  
  if (!InputValue) {
    throw new Error('пусто');
  }
  
  sendMessagestream({msg: InputValue});
  const messageDiv = createMessageDiv(username.value, InputValue);
  document.getElementById("messages").appendChild(messageDiv);


  username.value = '';
  messageInput.value = '';
}

document.getElementById("send-message").addEventListener("click", () => {
  sendMessage();
});


const createMessageDiv = (name, text) => {

  const messageDiv = document.createElement('div');
  const nameDiv = document.createElement('div');
  const textDiv = document.createElement('div');

  messageDiv.classList.add('my-message');
  nameDiv.classList.add('name');
  nameDiv.textContent = name;
  textDiv.classList.add('text');
  textDiv.textContent = text;

  messageDiv.appendChild(nameDiv);
  messageDiv.appendChild(textDiv);

  return messageDiv;
}