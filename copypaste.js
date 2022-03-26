function Copy() {
  var Url = document.getElementById("url");
  Url.innerHTML = window.location.hash;
  console.log(Url.innerHTML)
  Url.select();
  document.execCommand("copy");
  
}
