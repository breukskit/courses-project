import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faBook,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faBook, faUserCircle);
dom.watch();

export const insertIcons = () => {
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
