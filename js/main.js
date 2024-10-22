'use strict'
{
  const choices = document.querySelectorAll('li');

  choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
      const answer = document.createElement('span');
      if (choice.classList.contains('correct')){
        answer.textContent = ' - 正解!'
        choice.append(answer);
      }else{
        answer.textContent = ' - 不正解...'
        choice.append(answer);
      }
    })
  });
}