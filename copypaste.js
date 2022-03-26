function Copy() {
  var Url = document.getElementById("url");
  Url.innerHTML = window.location.search + window.location.hash;
  console.log(Url.innerHTML)
  Url.select();
  text = Url.select();
  alert('"window.location.search + window.location.hash"');
  document.execCommand("copy");
  
}
