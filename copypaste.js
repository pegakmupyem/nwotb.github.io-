function Copy() {
  var Url = document.getElementById("url");
  Url.innerHTML = window.location.search + window.location.hash;
  console.log(Url.innerHTML)
  Url.select();
  text = Url.select();
  document.execCommand("copy");
  alert(' UDID скопирован в буфер обмена, отправьте мне содержимое буфера обмена для оформления сертификата разработчика под ваше iOS устройство! \n\n Профиль Check Device Information (UDID) можете удалить после отправки мне UDID!');
  setTimeout(function Copy(){
                                alert("A теперь откройте приложение ⚙️НАСТРОЙКИ и установите загруженный профиль Check Device Information (UDID) либо в следующем запросе разрешить нажмите и откроется меню настроек с установкой загруженного профиля Check Device Information (UDID)");
                                window.location.href = 'https://t.me/pegakmop';
			},3333)
  window.location.href = 'https://t.me/pegakmop';
}
