jQuery(document).ready(function($){
  
  var count = '0';
  var texts = [
      'Это просто пример.',
      'Так было бы слишком просто.',
      'Нажми на кнопку - получишь результат!',
      'Кнопка работает!',
      'Жми еще!',
      'Любишь нажимать на кнопки?',
      'Да ты, прирожденный кнопконажиматель!',
      'Нажимать на незнакомые кнопки - опасно!'
    ];
  
  $('.button').on('click', function(e){
    
    var text = '';
    if(count < texts.length){
      text = texts[count];
    }
    
    else {
      text = 'Даже не знаю, что еще сказать...'
    }
    
    $('ul').prepend('<li>' + text + '</li>');
   count++;
      
    
    
    
  });
  
});