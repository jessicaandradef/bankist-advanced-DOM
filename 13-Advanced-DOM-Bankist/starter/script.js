'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(element => element.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////////
//selecting elements
/*console.log(document.documentElement);

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
console.log(allSection);

const btn = document.getElementsByTagName('button');
console.log(btn);

//creating elements
//.insertAdjacentHTML;

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'we use cookie for improve functionality'; //insere apenas o TEXTO
message.innerHTML =
  'we use cookie for improve functionality <button class="btn btn--close-cookie"> Got it </button>'; // agora preciso INSERIR no DOM
//posso usar textContent e innerHTML para ler e definir conteudo.

header.prepend(message);
//header.append(message);
//header.append(message.cloneNode(true)); // se quisessemos o mesmo texto em vários lugares

//header.before(message) //aparece ANTES do header
//header.after(message) //aparece DEPOIS do header

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    //forma antiga de fazer: message.parentElement.removeChild(message)
  });

//styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

//attributes (src, id, class.. são atributos de um elemento)

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
logo.setAttribute('class', 'exemploClass');

//classes

logo.classList.add();
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains();

//dont use :
logo.className = 'jessica';*/

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  //const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  //console.log(e.target.getBoundingClientRect());
  //scrolling the page
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset, //posição atual + rolagem atual da página
  //   s1coords.top + window.pageYOffset
  // );

  //window.scrollTo({
  //  left: s1coords.left + window.pageXOffset,
  //  top: s1coords.top + window.pageYOffset,
  //  behavior: 'smooth',
  //});

  section1.scrollIntoView({ behavior: 'smooth' });
});

//sticky navigation
const nav = document.querySelector('.nav');
const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function () {
  //console.log(window.scrollY); //mostra a posição do ponto de vista da janela de visualização

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

//the intersection observer API

/*const obsCallback = function () {};

const obsOptions = {};

const observer = new IntersectionObserver();
observer.observe(section1); */

//reveal sections

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
