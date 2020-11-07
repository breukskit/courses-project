import './sass/main.scss';
import './typescript/fontAwesome';

import { DOMElems } from './typescript/constants';
import { insertIcons } from './typescript/fontAwesome';

class Course {
  constructor(
    public customerName: string,
    public course: string,
    public author: string
  ) {}
}

let courses: Course[] = [];

const setListeners = () => {
  const inputs = DOMElems.form.querySelectorAll('input');
  inputs.forEach((input) => input.addEventListener('keyup', handleChange));
  inputs.forEach((input) => input.addEventListener('focus', handleChange));
  inputs.forEach((input) => input.addEventListener('blur', handleChange));
};

const handleChange = () => {
  const arr = Array.prototype.slice.call(
    DOMElems.form.querySelectorAll('input')
  );
  const indicator = arr.some((input) => input.value === '');

  !indicator ? (DOMElems.btn.disabled = false) : (DOMElems.btn.disabled = true);

  arr.forEach((input: HTMLInputElement) => {
    input.value === ''
      ? (input.style.border = '.2rem solid #FF0000')
      : (input.style.border = '.2rem solid #a76d60');
  });
};

const setLoader = () => {
  const loader = document.createElement('div') as HTMLDivElement;
  loader.className = 'loader';
  DOMElems.cardsContainer.appendChild(loader);
};

const cardFactory = () => {
  if (courses.length !== 0) {
    DOMElems.cardsContainer.innerHTML = '';
    DOMElems.cardsWrapper.innerHTML = '';
    courses.forEach((element) => {
      const card = document.createElement('div') as HTMLDivElement;
      card.className = 'card';
      card.innerHTML = `<img src="https://source.unsplash.com/random/400x40${Math.ceil(
        Math.random() * 5
      )}" alt="Placeholder" /><p class="name-p">
              <span class="name-s">Name:</span><span>${
                element.customerName
              }</span>
            </p><p class="course-p">
              <span class="course-s">Course:</span><span>${
                element.course
              }</span>
            </p><p class="author-p">
              <span class="author-s">Author:</span><span>${
                element.author
              }</span>
            </p>`;
      DOMElems.cardsWrapper.appendChild(card);
    });
    setLoader();
    setTimeout(() => {
      DOMElems.cardsContainer.innerHTML = '';
      DOMElems.cardsContainer.appendChild(DOMElems.cardsWrapper);
    }, 2000);
  }
};

const handleStorage = () => {
  if (localStorage.getItem('courses')) {
    courses = JSON.parse(localStorage.getItem('courses')!);
  }
};

const handleSubmit = (e: Event) => {
  e.preventDefault();
  const inputs = DOMElems.form.querySelectorAll('input');
  const course = new Course(inputs[0].value, inputs[1].value, inputs[2].value);
  handleStorage();
  courses.push(course);
  localStorage.setItem('courses', JSON.stringify(courses));
  cardFactory();
  DOMElems.btn.disabled = true;
  inputs.forEach((input) => (input.value = ''));
};

const clearCourses = () => {
  localStorage.removeItem('courses');
  courses = [];
  DOMElems.cardsWrapper.innerHTML = '';
};

const onLoad = () => {
  insertIcons();
  setListeners();
  handleStorage();
  cardFactory();
};

window.onload = onLoad;
DOMElems.form.addEventListener('submit', handleSubmit);
DOMElems.clear.addEventListener('click', clearCourses);
