let btn = document.getElementById('btn')
let input = document.getElementById('email')

// Make sure data is matching email type
function validateEmail(email) {
  const matches = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
  if (matches === null) {
    return false
  }
  return true
}

// Create a funciton that see if its true or false and add and remove classes
function validateForm(e) {
  e.preventDefault()
  const isValidEmail = validateEmail(input.value)
  if (!isValidEmail) {
    input.classList.add('border-red-500')
    input.classList.add('text-red-500')
  } else {
    input.classList.remove('border-red-500')
    input.classList.remove('text-red-500')
    input.value = ''
  }
}

btn.addEventListener('click', validateForm)

