// preload
(() => {
   if (window.addEventListener) {
      window.addEventListener('load', () => document.querySelector('#preload').style.display = 'none', false);
   } else {
      window.attachEvent('onload', () => document.querySelector('#preload').style.display = 'none');
   }
})();

// navbar
const navToggle = document.querySelector('.mobile-nav-toggle'),
      nav = document.querySelector('#navbar'),
      menu = document.querySelector('#menu'),
      mobileBreakPoint = 879;

const openSubmenu = e => {
   e.preventDefault();
   const parentMenu = e.target.parentNode,
         activeParentMenu = document.querySelector('li.has-submenu.open');

   if(parentMenu.classList.contains('open')) {
      parentMenu.classList.remove('open');
      return
   }

   if(activeParentMenu) {
      activeParentMenu.classList.remove('open');
   }

   parentMenu.classList.add('open');
}

const dismissSubMenu = () => {
   const viewportWidth = window.innerWidth,
         activeParentMenu = document.querySelector('li.has-submenu.open');

   if(activeParentMenu && viewportWidth > mobileBreakPoint) {
      activeParentMenu.classList.remove('open');
   }
}

navToggle.addEventListener('click', () => {
   const visible = nav.getAttribute('data-visible');
   if(visible === 'false') {
      nav.setAttribute('data-visible', true);
      navToggle.setAttribute('aria-expanded', true);
   } else {
      nav.setAttribute('data-visible', false);
      navToggle.setAttribute('aria-expanded', false);
      
      const activeParentMenu = document.querySelector('li.has-submenu.open');
      if(activeParentMenu) {
         activeParentMenu.classList.remove('open');
      }
   }
});

menu.addEventListener('click', openSubmenu);
menu.addEventListener('focusout', dismissSubMenu);

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