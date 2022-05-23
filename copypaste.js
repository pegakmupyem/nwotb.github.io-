function Copy() {
  var Url = document.getElementById("url");
  Url.innerHTML = window.location.search + window.location.hash;
  console.log(Url.innerHTML)
  Url.select();
  text = Url.select();
  document.execCommand("copy");
  setTimeout(() => alert(' 1 UDID скопирован в буфер обмена, отправьте мне содержимое буфера обмена для оформления сертификата разработчика под ваше iOS устройство! \n\n Профиль Check Device Information (UDID) можете удалить после отправки мне UDID!'), 3333);
  window.location.href = 'https://t.me/pegakmop';
}
