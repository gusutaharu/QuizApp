'use strict'
{
  function render(quiz) {
    const main = document.querySelector('main');

    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    h2.textContent = quiz[0];

    section.appendChild(h2);
    main.appendChild(section);
  }

  const quiz = ['1の正解は？', '選択肢 A', '選択肢 B', '選択肢 C', 0];

  render(quiz);
}