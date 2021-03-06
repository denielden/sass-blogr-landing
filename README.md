# Blogr landing page - Frontend Mentor 

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

Additional features:
- fixed navigation bar
- design of **Login and Sign Up** modals
- Scroll up button 

### Screenshot

![Blogr landing](./design/desktop-preview.jpg)

### Links

- Solution URL: [github](https://github.com/denielden/sass-blogr-landing)
- Live Site URL: [live site](https://denielden.github.io/sass-blogr-landing)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Accessibility workflow
- Vanilla Javascript
- [Sass](https://sass-lang.com/)

### What I learned

I have deepened the use of **SASS** focusing on splitting into modules and reusing code through `mixins` and variables. I got more familiar with the **Mobile-first** approach and with the **Grid** css.

I added **Login and Sign Up** modals and initially had problems with centering because using `flex` the modal was centered in the center of the whole page and not in the center of the visible screen, but then I fixed it using `display: fixed` combined with old style alignment preceding *flex and grid*.  

### Continued development

I could not understand why if I assign a `click` event to the white background under the Login and Sign Up modals when they are open the close function of the modals is performed even if you click in the input or inside the modal.  
Open to feedback on how to fix it :)

## Author

- Website - [denielden](https://denielden.github.io)
- Frontend Mentor - [@denielden](https://www.frontendmentor.io/profile/denielden)

A special thanks goes to @christopher-adolphe who, thanks to his feedback, has allowed me to understand how to make sure that when the mobile menu and submenus are open they close by themselves if ignored or if clicked outside them.  
Thank you for taking the time to check out my project!

## **Have fun building!** ????
