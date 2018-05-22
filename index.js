document.addEventListener('DOMContentLoaded', () => {
  const navBar = document.getElementsByTagName('nav')[0]
  const scrollDef = document.getElementById('scroll-definitions')
  const mrTModal = document.getElementsByClassName('modal')[0]
  
  document.addEventListener('scroll', () => scrollHandler(navBar, scrollDef, mrTModal))
})

const scrollHandler = (navEl, limitEl, mrTModal) => {
  stickyify(navEl, limitEl);
  letsScroll(mrTModal)
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

const letsScroll = mrTModal => {
  const height = document.documentElement.scrollHeight || document.body.scrollHeight
  const currentScroll = window.scrollY + window.innerHeight
  const triggerHeight = height - height * .1
  if (currentScroll >= triggerHeight) {
    openModal(mrTModal)
  }
}
const openModal = modal => {
  modal.style.display = 'block';
}
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


