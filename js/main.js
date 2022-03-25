// navbar
const navToggle = document.querySelector('.mobile-nav-toggle'),
      nav = document.querySelector('#navbar'),
      submenuLi = document.querySelectorAll('li.has-submenu');

navToggle.addEventListener('click', () => {
   const visible = nav.getAttribute('data-visible');
   if(visible === 'false') {
      nav.setAttribute('data-visible', true);
      navToggle.setAttribute('aria-expanded', true);
   } else {
      nav.setAttribute('data-visible', false);
      navToggle.setAttribute('aria-expanded', false);
   }
});

const openSubmenu = e => {
   e.preventDefault();
   const ele = e.target;

   if(ele.parentNode.classList.contains('open')) {
      ele.parentNode.classList.remove('open');
      return
   }

   submenuLi.forEach(li => li.classList.remove('open'));
   if(ele.nodeName !== "A" || !ele.parentNode.className.includes('has-submenu')) return
   ele.parentNode.classList.toggle('open');
}
submenuLi.forEach(li => li.addEventListener('click', openSubmenu));

// scrool nav and goTop btn
const header = document.querySelector('header'),
      goTop = document.querySelector('#goTop');

window.onscroll = () => {
   if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      header.style.backgroundColor = 'hsl(240, 10%, 16%)';
      goTop.style.display = 'block';
   } else {
      header.style.backgroundColor = 'transparent';
      goTop.style.display = 'none';
   }
}

goTop.addEventListener('click', () => {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
});

// modals
const accessBtns = document.querySelectorAll('#login, #signUp, #changeLogin, #changeSignUp'),
      accessModals = document.querySelectorAll('#loginModal, #signUpModal'),
      closeModalsX = document.querySelectorAll('.close-modal');

const closeModals = () => accessModals.forEach(modal => modal.classList.remove('open'));
const openModal = e => {
   e.preventDefault();
   closeModals();

   const typeModal = e.target.id;
   switch(typeModal){
      case 'login':
      case 'changeLogin':
         accessModals[0].classList.add('open');
         break; 
      case 'signUp':
      case 'changeSignUp':
         accessModals[1].classList.add('open');
         break;
      default:
         closeModals();
   }
}
accessBtns.forEach(accessBtn => accessBtn.addEventListener('click', openModal));
closeModalsX.forEach(accessModal => accessModal.addEventListener('click', closeModals));