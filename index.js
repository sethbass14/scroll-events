document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('myModal');
  const myBtn = document.getElementById('myBtn');
  const span = document.getElementsByClassName('close')[0]
  const form = document.getElementById('sign-up-form')
  
  myBtn.addEventListener('click', () => openModal(modal) )
  span.addEventListener('click', () => closeModal(modal))
  form.addEventListener('submit', (event) => handleSubmit(form, modal))
})

const openModal = modal => {
  modal.style.display = 'block';
}

const closeModal = modal => {
  const modalContent = modal.firstElementChild
  modalContent.style.animationName = 'disappear';
  modal.style.animationName = 'fade';
  setTimeout(() => {
    modalContent.style.animationName = 'animatetop';
    modal.style.display = 'none';
    modal.style.animationName = ''  
  }, 1000)
}

const handleSubmit = (form, modal) => {
  event.preventDefault()
  const name = form.elements.name.value 
  const email = form.elements.email.value
  const submit = form.elements.submit
  alert(`Hey ${name}! Your password is ${email}!`)
  closeModal(modal)
  form.reset()
}