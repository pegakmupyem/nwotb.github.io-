window.hash = {
  acthash: "53ec942f9f6376a6c08859c91ee605a3"
};
const input = document.getElementById('txt');
$(document).ready(function(){
                 $("#txt").keypress(function(e){
                   if(e.keyCode==13){
                     if (MD5(input.value)==hash.acthash) {
                       localStorage.removeItem('pass');
                       localStorage.setItem('pass', JSON.stringify(hash.acthash));
                       window.open('/signapps')
                     } else {
                       alert('📵 Приложение ещё не подписано‼️');
                       localStorage.removeItem('pass');
                       localStorage.setItem('pass', JSON.stringify("noLLIeJl_Haxyū"));
                       
                     }
                   }
                 });
             });
