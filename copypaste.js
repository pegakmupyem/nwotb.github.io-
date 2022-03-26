function Copy() {
  var Url = document.getElementById("url");
  Url.innerHTML = window.location.search + window.location.hash;
  console.log(Url.innerHTML)
  Url.select();
  document.execCommand("copy");
  alert('"console.log(Url.innerHTML)"');
}
