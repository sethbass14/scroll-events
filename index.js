document.addEventListener('DOMContentLoaded', () => {
  const navBar = document.getElementsByTagName('nav')[0]
  const scrollDef = document.getElementById('scroll-definitions')
  
  document.addEventListener('scroll', () => scrollHandler(navBar, scrollDef))
})

const scrollHandler = (navEl, limitEl) => {
  stickyify(navEl, limitEl)
}

const scrolledPast = element => {
  let bodyRect = document.body.getBoundingClientRect();
  let elemRect = element.getBoundingClientRect();
  let offSet = elemRect.top - bodyRect.top
  const currentHeight = window.scrollY
  return offSet <= currentHeight
}

const stickyify = (navEl, limitEl) => {
  navEl.className = scrolledPast(limitEl) ? 'sticky' : ''
}
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
