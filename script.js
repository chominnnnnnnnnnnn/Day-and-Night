const bg = document.querySelector('body'),
      btn = document.querySelector('input'),
      title = document.querySelector('h1');

      function dayAndNight(){
        if(btn.value === 'Night'){
        btn.value='Day'
        title.textContent='Night :o'
        bg.style.backgroundColor='#2c3e50'
        bg.style.color='#ecf0f1'
      }else{
        btn.value='Night'
        bg.style.backgroundColor='#ecf0f1'
        bg.style.color='#2c3e50'
        title.textContent='Day :)'
        }
      }