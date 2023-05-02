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

const popupContainer = document.querySelector('.popup-container');
const seeProjectBtn = document.querySelector('.btn2');

seeProjectBtn.addEventListener('click', () => {
  // add blur class to body element
  document.body.classList.add('blur');

  // pop-up card
  const popupCard = document.createElement('div');
  popupCard.classList.add('popup-card');

  // close pop-up card
  const closePop = document.createElement('div');
  closePop.classList.add('closePop');

  const closePopBtn = document.createElement('img');
  closePopBtn.src = 'Disabled.png';
  closePop.appendChild(closePopBtn);
  popupCard.appendChild(closePop);

  // set pop-up card dimensions based on screen size
  if (window.innerWidth < 768) {
    popupCard.style.width = '100%';
    popupCard.style.height = '100%';
  } else {
    popupCard.style.width = '70%';
    popupCard.style.height = '85%';
  }

  // image element and set source
  const img = document.createElement('img');
  img.src = 'desktop-pop.png';
  popupCard.appendChild(img);

  // container for tech stack buttons
  const techStackContainer = document.createElement('div');
  techStackContainer.classList.add('tech-stack-container');

  // tech stack buttons and append to container
  const techStackBtns = ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML', 'React'];
  techStackBtns.forEach((tech) => {
    const btn = document.createElement('button');
    btn.textContent = tech;
    techStackContainer.appendChild(btn);
  });
  popupCard.appendChild(techStackContainer);

  // title and description elements
  const title = document.createElement('h2');
  title.textContent = 'Multi-Post Stories Gain+Glory';
  popupCard.appendChild(title);

  const description = document.createElement('p');
  description.textContent = 'This project is a multi-post story platform that allows users to and share their own stories with others. It was built using Ruby on Rails, CSS, JavaScript, HTML, and React.';
  popupCard.appendChild(description);

  // container for live and visit site buttons
  const liveVisitContainer = document.createElement('div');
  liveVisitContainer.classList.add('live-visit-container');

  // live and visit site buttons and append to container
  const liveBtn = document.createElement('button');
  liveBtn.textContent = 'Show Live';
  const visitBtn = document.createElement('button');
  visitBtn.textContent = 'Visit Site';
  liveVisitContainer.appendChild(liveBtn);
  liveVisitContainer.appendChild(visitBtn);
  popupCard.appendChild(liveVisitContainer);

  // append pop-up card to popup container
  popupContainer.appendChild(popupCard);

  // add event listener to closePopBtn
  closePopBtn.addEventListener('click', () => {
    // remove blur class from body element
    document.body.classList.remove('blur');
    popupContainer.removeChild(popupCard);
  });
});