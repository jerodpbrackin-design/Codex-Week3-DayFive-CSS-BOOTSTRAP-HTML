function saveData() {
  const nameValue = document.getElementById('name').value
  const emailValue = document.getElementById('email').value
  const messageValue = document.getElementById('message').value

  const contactData = {
    name: nameValue,
    email: emailValue,
    message: messageValue,
  }

  console.log(contactData)
}
