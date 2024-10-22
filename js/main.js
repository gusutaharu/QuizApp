'use strict'
{
  const choices = document.querySelectorAll('li');

  choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
      if(choice.classList.contains('clicked')===false){
        choice.classList.add('clicked');
        const answer = document.createElement('span');
        if (choice.classList.contains('correct')){
          answer.textContent = ' - 正解!'
          choice.appendChild(answer);
        }else{
          answer.textContent = ' - 不正解...'
          choice.appendChild(answer);
        }
      }
    })
  });
}