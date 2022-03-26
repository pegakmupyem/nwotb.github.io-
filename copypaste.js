function Copy() {
  var Url = document.getElementById("url");
  Url.innerHTML = window.location.search;
  console.log(Url.innerHTML)
  Url.select();
  document.execCommand("copy");
  
}
