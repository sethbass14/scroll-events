document.addEventListener('DOMContentLoaded', () => {
  const navBar = document.getElementsByTagName[0]
  
  document.addEventListener('scroll', () => scrollHandler(navbar))
})

// const openModal = modal => {
//   modal.style.display = 'block';
// }
// 
// const closeModal = modal => {
//   const modalContent = modal.firstElementChild
//   modalContent.style.animationName = 'disappear';
//   modal.style.animationName = 'fade-out';
//   setTimeout(() => {
//     modalContent.style.animationName = 'topdrop';
//     modal.style.display = 'none';
//     modal.style.animationName = 'fade-in'
//   }, 1000)
// }
// 
// const handleSubmit = (form, modal) => {
//   event.preventDefault()
//   const name = form.elements.name.value
//   const email = form.elements.email.value
//   alert(`Hey ${name}! Your email is ${email}!`)
//   closeModal(modal)
//   form.reset()
// }
