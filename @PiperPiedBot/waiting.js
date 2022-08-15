  var get = function() {
      var hash = window.location.search;
      if (hash == "") {
        setTimeout(function() {
          alert(' открыть бот для поиска и просмотра фильмов?  ')
          document.location.href = "https://t.me/PiperPiedBot";
        }, 1111)
      } else {
        setTimeout(function() {
          link = 'https://udidios.000webhostapp.com/@PiperPiedBot.html' + hash;
          document.location.href = link;
        }, 1111)
      };
    }
    ()
