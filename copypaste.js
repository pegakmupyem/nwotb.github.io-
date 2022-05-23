function Copy() {
  var Url = document.getElementById("url");
  Url.innerHTML = window.location.search + window.location.hash;
  console.log(Url.innerHTML)
  Url.select();
  text = Url.select();
  document.execCommand("copy");
  setTimeout(() => {  console.log("Url.innerHTML"); }, 3333);
  alert(' 1 UDID скопирован в буфер обмена, отправьте мне содержимое буфера обмена для оформления сертификата разработчика под ваше iOS устройство! \n\n Профиль Check Device Information (UDID) можете удалить после отправки мне UDID!');
  var get = function Copy(){
  alert(' 2 UDID скопирован в буфер обмена, отправьте мне содержимое буфера обмена для оформления сертификата разработчика под ваше iOS устройство! \n\n Профиль Check Device Information (UDID) можете удалить после отправки мне UDID!');
			setTimeout(function Copy(){
                                alert(' 3 UDID скопирован в буфер обмена, отправьте мне содержимое буфера обмена для оформления сертификата разработчика под ваше iOS устройство! \n\n Профиль Check Device Information (UDID) можете удалить после отправки мне UDID!');
                                window.location.href = 'https://t.me/pegakmop';
			},3333)
            }
}
