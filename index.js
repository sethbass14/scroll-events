document.addEventListener('DOMContentLoaded', () => {
  const navBar = document.getElementsByTagName('nav')[0]
  const scrollDef = document.getElementById('scroll-definitions')
  const mrTModal = document.getElementsByClassName('modal')[0]
  const closeBtn = document.getElementById('close')

  document.addEventListener('scroll', () => scrollHandler(navBar, scrollDef, mrTModal))
  closeBtn.addEventListener('click', () => closeModal(mrTModal))
})

//handles scroll events
const scrollHandler = (navEl, limitEl, mrTModal) => {
  stickyify(navEl, limitEl);
  letsScroll(mrTModal)
}

//Takes in an element and gets its boundingClientRect object.
//This object has the top, bottom, height, and width of an element relative to the viewport
//So bodyRect refers to the positioning of the top of the body relative to the viewport
//elemRect refers to the positioning of the top of the element in reference to the viewport
//The offset finds the distance in px between the top of the page and the top of the element
//64 accounts for the height of the sticky nav
const getElementOffSet = element => {
  let bodyRect = document.body.getBoundingClientRect();
  let elemRect = element.getBoundingClientRect();
  // 64 px is hard coded as the sticky nav element for now
  let offSet = elemRect.top - bodyRect.top - 64
  return offSet
}

//Checks to see if the offSet aka the barrier where we want the sticky nav to show up is less than or equal to the current view port's top.
const scrolledPast = element => {
  const offSet = getElementOffSet(element)
  const currentHeight = window.scrollY
  return offSet <= currentHeight
}

//Checks if the current viewport has broken the sticky nav barrier.
//If it has, it changes the nav's classname and the sticky nav appears
const stickyify = (navEl, limitEl) => {
  navEl.className = scrolledPast(limitEl) ? 'sticky' : ''
}

//Grabs the height of the entire body
//window.scrollY is the position of the top of the viewport.
//window.innerHeight is the height of just the viewport.
//currentScroll calculates the height of the bottom of the viewport all the way to the top of the body.
//triggerHeight is the height at which we want the modal to trigger.
//If currentScroll is greater than or equal to the triggerHeight and the modal is triggerable, we open the modal
//If the currentScroll is less than the triggerHeight, then we set it to being triggerable again.
const letsScroll = mrTModal => {
  const height = document.documentElement.scrollHeight || document.body.scrollHeight
  const currentScroll = window.scrollY + window.innerHeight
  const triggerHeight = height - height * .1
  const triggerable = mrTModal.dataset.triggerable === 'true'
  if (currentScroll >= triggerHeight && triggerable) {
    openModal(mrTModal)
  }
  if (currentScroll < triggerHeight) {
    mrTModal.dataset.triggerable = 'true'
  }
}

//Displays the modal
//Makes the modal untriggerable to account for when the modal is closed under the threshold, but the user has not scrolled past the threshold.
//This means that the user can scroll up after dismissing the modal without another modal trigger. 
const openModal = modal => {
  modal.style.display = 'block';
  modal.dataset.triggerable = 'false';
}

//Grabs the modalContent and sets its animation to disappear
//Sets a timeout after the animation is finished that hides the modal
const closeModal = modal => {
    const modalContent = modal.firstElementChild
    modalContent.style.animationName = 'disappear';
    setTimeout(() => {
      modal.style.display = 'none';
      modalContent.style.animationName = 'scroll-up';
    }, 800)
}
