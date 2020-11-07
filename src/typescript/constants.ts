const nameInput = document.getElementById('name') as HTMLInputElement;
const courseInput = document.getElementById('course') as HTMLInputElement;
const authorInput = document.getElementById('author') as HTMLInputElement;
const btn = document.getElementById('submit') as HTMLButtonElement;
const form = document.getElementById('form') as HTMLFormElement;
const clear = document.getElementById('clear') as HTMLButtonElement;
const cardsContainer = document.querySelector('.cards') as HTMLElement;
const cardsWrapper = document.querySelector('.cards-wrapper') as HTMLDivElement;

export const DOMElems = {
  nameInput,
  courseInput,
  authorInput,
  btn,
  form,
  clear,
  cardsContainer,
  cardsWrapper,
};
