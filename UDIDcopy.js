function Copy() {
  var hash = window.location.hash.slice(1);
  if (hash == "") {
  } else {
  var Url = document.getElementById("url");
  Url.innerHTML = window.location.search + '📲' + hash;
  console.log(Url.innerHTML)
  Url.select();
  text = Url.select();
  document.execCommand("copy");
  var Url = document.getElementById("url");
  Url.innerHTML = 'Скопировано, отправить в телеграм: 📟' + window.location.search + '📱' + hash;
  console.log(Url.innerHTML)
  setTimeout(() => alert('✂️ UDID скопирован 'Url.innerHTML' в буфер обмена, отправьте мне в телеграмм содержимое буфера обмена 📲 для оформления сертификата разработчика под ваше iOS устройство! \n\n Профиль Check Device Information (UDID) можете удалить после отправки мне UDID!'), 1500);
  setTimeout(function(){ window.location="https://t.me/pegakmop"; },6666);
  };
}

