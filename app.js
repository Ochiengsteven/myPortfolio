const mainMenu = document.querySelector('#mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const portfolio = document.querySelector('a[href="#my-work"]');
const aboutMe = document.querySelector('a[href="#about-me"]');
const contactMe = document.querySelector('a[href="#contact-me"]');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
portfolio.addEventListener('click', close);
aboutMe.addEventListener('click', close);
contactMe.addEventListener('click', close);

// form validation

const form = document.querySelector('#form');
const emailText = document.querySelector('input[type="email"]');

form.addEventListener('submit', (event) => {
  if (emailText.value !== emailText.value.toLowerCase()) {
    event.preventDefault();

    // Remove previous error message
    const previousErrorMessage = form.querySelector('.error-message');
    if (previousErrorMessage) {
      form.removeChild(previousErrorMessage);
    }

    const errorMessage = document.createElement('p');
    const formText = document.querySelector('#form textarea');
    errorMessage.textContent = 'Please enter your email in lower case!';
    errorMessage.style.color = '#ff3f00';
    errorMessage.classList.add('error-message');
    formText.insertAdjacentElement('afterend', errorMessage);
  }
});
