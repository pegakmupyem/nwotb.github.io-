    function ilonaKep() {
      var hash = window.location.hash.slice(1);
      if (hash == "") {
      } else {
      var frame = document.querySelector('.frame');
      var ilona = document.createElement("IMG");
      ilona.src = "https://ipsw.me/assets/devices/" + hash + ".png";
      ilona.width = "111";
      frame.appendChild(ilona);
      };
    }
    ilonaKep()
function Copy() {
  var hash = window.location.hash.slice(1);
  if (hash == "") {
  } else {
  var Url = document.getElementById("url");
  Url.innerHTML = window.location.search + ' ' + window.location.hash.slice(1);
  console.log(Url.innerHTML)
  Url.select();
  text = Url.select();
  document.execCommand("copy");
  setTimeout(() => alert('✂️ UDID скопирован в буфер обмена, отправьте мне в телеграмм содержимое буфера обмена 📲 для оформления сертификата разработчика под ваше iOS устройство! \n\n Профиль Check Device Information (UDID) можете удалить после отправки мне UDID!'), 1111);
  setTimeout(function(){ window.location="https://t.me/pegakmop"; },1500);
  };
}
Copy()
