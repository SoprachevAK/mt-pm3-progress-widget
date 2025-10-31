import './style.css'

import { WidgetsRemote } from 'wotstat-widgets-sdk';

const remote = new WidgetsRemote();

function updateState(selector, value) {
  const element = document.querySelector(selector);

  // Устанавливаем значение счетчика
  element.querySelector('.current').textContent = value;

  // Переключаем класс завершенного этапа
  if (value >= 25) element.classList.add('completed');
  else element.classList.remove('completed');

  // Добавляем CSS-переменную для прогресс-бара
  element.style.setProperty('--progress', `${100 * value / 25}%`);
}

remote.defineState('VI - VII уровень', 0, { elementHelper: '.item-1' }).watch((v) => updateState('.item-1', v));
remote.defineState('VII - IX уровень', 0, { elementHelper: '.item-2' }).watch((v) => updateState('.item-2', v));
remote.defineState('X - XI уровень', 0, { elementHelper: '.item-3' }).watch((v) => updateState('.item-3', v));