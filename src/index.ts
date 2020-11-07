import './sass/main.scss';
import './typescript/fontAwesome';

import { DOMElems } from './typescript/constants';

const insertIcons = () => {
  const inputs = Array.prototype.slice.call(
    document.getElementsByTagName('input')
  );
  inputs.forEach((input: HTMLInputElement) => {
    const i = document.createElement('i') as HTMLIFrameElement;
    const parent = input.parentElement;
    const span = document.createElement('span') as HTMLSpanElement;
    span.appendChild(i);
    input.id === 'name'
      ? i.classList.add('fas', 'fa-user')
      : input.id === 'course'
      ? i.classList.add('fas', 'fa-book')
      : i.classList.add('fas', 'fa-user-circle');
    parent?.insertBefore(span, input);
  });
};

const setListeners = () => {
  const inputs = DOMElems.form.querySelectorAll('input');
  inputs.forEach((input) => input.addEventListener('keyup', handleChange));
  inputs.forEach((input) => input.addEventListener('focus', handleChange));
  inputs.forEach((input) => input.addEventListener('blur', handleChange));
};

const handleChange = () => {
  const inputs = DOMElems.form.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === '') {
      inputs[i].style.border = '.2rem solid #FF0000';
    } else {
      inputs[i].style.border = '.2rem solid #a76d60';
    }
  }
  const arr = Array.prototype.slice.call(inputs);
  const indicator = arr.some((input) => input.value === '');
  if (!indicator) {
    DOMElems.btn.disabled = false;
  } else {
    DOMElems.btn.disabled = true;
  }
};

const onLoad = () => {
  insertIcons();
  setListeners();
};

window.onload = onLoad;
