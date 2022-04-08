function Copy() {
  var Url = document.getElementById("url");
  Url.innerHTML = window.location.search + window.location.hash;
  console.log(Url.innerHTML)
  alert(Скопировано: + 'console.log(Url.innerHTML)');
  Url.select();
  text = Url.select();
  alert('text');
  alert('UDID скопирован в буфер обмена, отправьте содержимое буфера обмена!');
  document.execCommand("copy");
}
