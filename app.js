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
const worksContainer = document.querySelector('.works');

// Define an array of objects containing the data for each card
const worksData = [
  {
    imgSrc: 'images/work1.png',
    title: 'Multi-Post Stories Gain+Glory',
    langs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    btnText: 'See Project',
    btnLink: '#',
  },
  {
    imgSrc: 'images/work1.png',
    title: 'Multi-Post Stories Gain+Glory',
    langs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    btnText: 'See Project',
    btnLink: '#',
  },
  {
    imgSrc: 'images/work1.png',
    title: 'Multi-Post Stories Gain+Glory',
    langs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    btnText: 'See Project',
    btnLink: '#',
  },
  {
    imgSrc: 'images/work1.png',
    title: 'Multi-Post Stories Gain+Glory',
    langs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    btnText: 'See Project',
    btnLink: '#',
  },
  {
    imgSrc: 'images/work1.png',
    title: 'Multi-Post Stories Gain+Glory',
    langs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    btnText: 'See Project',
    btnLink: '#',
  },
  {
    imgSrc: 'images/work1.png',
    title: 'Multi-Post Stories Gain+Glory',
    langs: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    btnText: 'See Project',
    btnLink: '#',
  },
  // Add more objects for each card you want to generate
];

// Loop through the worksData array and generate a card for each object
worksData.forEach((work) => {
  // Create the elements for the card
  const workItem = document.createElement('div');
  workItem.classList.add('work-item');

  const img = document.createElement('img');
  img.src = work.imgSrc;
  img.alt = '';

  const workItemContent = document.createElement('div');
  workItemContent.classList.add('work-item-content');

  const title = document.createElement('h2');
  title.innerHTML = work.title;

  const langsList = document.createElement('ul');
  work.langs.forEach((lang) => {
    const langItem = document.createElement('li');
    langItem.classList.add('langs');

    const langBtn = document.createElement('button');
    langBtn.textContent = lang;

    langItem.appendChild(langBtn);
    langsList.appendChild(langItem);
  });

  const btnLink = document.createElement('a');
  btnLink.href = work.btnLink;

  const btn = document.createElement('button');
  btn.classList.add('btn2');
  btn.textContent = work.btnText;

  btnLink.appendChild(btn);

  // Append the elements to the card
  workItemContent.appendChild(title);
  workItemContent.appendChild(langsList);
  workItemContent.appendChild(btnLink);

  workItem.appendChild(img);
  workItem.appendChild(workItemContent);

  // Append the card to the works container
  worksContainer.appendChild(workItem);
});

// pop up card
const popupContainer = document.querySelector('.popup-container');
const seeProjectBtns = document.querySelectorAll('.btn2');

seeProjectBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
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

    // title and description elements
    const title = document.createElement('h2');
    title.textContent = 'Multi-Post Stories Gain+Glory';
    popupCard.appendChild(title);

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

    const description = document.createElement('p');
    description.textContent = 'This project is a multi-post story platform that allows users to and share their own stories with others. It was built using Ruby on Rails, CSS, JavaScript, HTML, and React.';
    popupCard.appendChild(description);

    // container for live and visit site buttons
    const liveVisitContainer = document.createElement('div');
    liveVisitContainer.classList.add('live-visit-container');

    // live and visit site buttons and append to container
    const liveHTML = `
    <div class="liveBtn">
      <button>Show Live<img src= "icon-live.png"></button>
    </div>`;
    const visitHTML = `
    <div class="liveBtn">
      <button>Visit Site<img src= "icon-source.png"></button>
    </div>`;
    const liveBtn = document.createElement('div');
    liveBtn.innerHTML = liveHTML;
    const visitBtn = document.createElement('div');
    visitBtn.innerHTML = visitHTML;
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
});
